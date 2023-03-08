const { Product, User } = require("../models");
const {
  AuthenticationError,
  ValidationError,
} = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, { user }) => {
      if (!(user?.isAdmin || user?.isSuper)) {
        throw new AuthenticationError(
          "You need to be logged in as admin/super to perform this query."
        );
      }

      return User.find({}).select('-password');
    },

    user: async (parent, { userId }, { user }) => {
      if (!(user?.isAdmin || user?.isSuper)) {
        throw new AuthenticationError(
          "You need to be logged in as admin/super to perform this query."
        );
      }

      return User.findOne({ _id: userId }, { select: '-password' });
    },

    products: async (parent, args, context) => {
      return Product.find();
    },

    product: async (parent, { productId }, context) => {
      return Product.findOne({ _id: productId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }, context) => {
      const checkUser = await User.findOne({ email });

      if (checkUser) {
        throw new ValidationError("User already exists!");
      }

      const user = await User.create({
        name,
        email,
        password,
        isAdmin: false,
        isSuper: false,
      });

      const token = signToken(user);

      return { token, user };
    },

    addSuperOrAdmin: async (
      parent,
      { name, email, password, isAdmin, isSuper },
      { user }
    ) => {
      const checkUser = await User.findOne({ email });
      if (checkUser) {
        throw new ValidationError("User already exists!");
      }

      if (!user?.isAdmin) {
        throw new AuthenticationError(
          "You must be signed in as an admin to perform this action!"
        );
      }

      await User.create({
        name,
        email,
        password,
        isAdmin,
        isSuper,
      });

      // Since mongoose.create method does not return JSON data, manually return data to ensure
      // frontend knows admin/super user account was created.
      return { name, email, isAdmin, isSuper };
    },

    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("User does not exist.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },

    removeUserSelf: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError(
          "You must be logged in to delete your account."
        );
      }

      return User.findOneAndDelete({ _id: user._id });

      // TODO: add token to blacklist
    },

    // TODO: add a removeUser mutation for admin removal of user

    // TODO: add Firebase refs for product images
    addProduct: async (
      parent,
      { name, price, photo_ref = "none", description, category, theme },
      { user }
    ) => {
      // TODO: Attempt Firebase reference update here

      if (!user) {
        throw new AuthenticationError(
          "You must be logged in before adding products."
        );
      }

      if (!user.isAdmin && !user.isSuper) {
        throw new AuthenticationError(
          "You must be an admin or super user to add or delete products!"
        );
      }

      if (!name) {
        throw new ValidationError("Product name was not provided");
      }

      const newProduct = Product.create({
        name,
        price,
        photo_ref,
        description,
        category,
        theme,
      });

      return newProduct;
    },

    removeProduct: async (parent, args, { user }) => {
      if (!(user?.isAdmin || user?.isSuper)) {
        throw new AuthenticationError(
          "You must be an admin or super user to add or delete products!"
        );
      }

      const { name } = args;

      if (!name) {
        throw new ValidationError("Product does not exist.");
      }

      const removedProduct = await Product.findOneAndDelete({ name });

      return removedProduct;
    },
  },
};

module.exports = resolvers;
