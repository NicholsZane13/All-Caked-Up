const { Product, User } = require("../models");
const {
  AuthenticationError,
  ValidationError,
} = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      return User.find();
    },

    user: async (parent, { userId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      return User.findOne({ _id: userId });
    },

    products: async (parent, args, context) => {
      return Product.find();
    },

    product: async (parent, { productId }, context) => {
      return Product.findOne({ _id: productId });
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { name, email, password, isAdmin = false, isSuper = false },
      context
    ) => {
      if (context && context.user && context.user.isAdmin) {
        const user = await User.create({
          name,
          email,
          password,
          isAdmin,
          isSuper,
        });

        return user;
      } else {
        const checkUser = await User.findOne({ email });

        if (checkUser) {
            throw new ValidationError('User already exists!');
        }

        const user = await User.create({ name, email, password });

        const token = signToken(user);

        return { token, user };
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("User email does not exist.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, args, context) => {
        const { email } = args;
        console.log(context);

      if (context && context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }

      throw new AuthenticationError(
        "You must be logged in to delete user account."
      );
    },

    // TODO: add Firebase refs for product images
    addProduct: async (parent, args, context) => {
      if (context.user.isAdmin || context.user.isSuper) {
        throw new AuthenticationError(
          "You must be an admin or super user to add or delete products!"
        );
      }

      const { name, price, photo_ref, description, category, theme } = args;

      if (!name) {
        throw new ValidationError("Product name was not provided");
      }

      const product = await Product.create({
        name,
        price,
        photo_ref,
        description,
        category,
        theme,
      });

      return product;
    },

    removeProduct: async (parent, args, context) => {
      if (!context.user.isAdmin && !context.user.isSuper) {
        throw new AuthenticationError(
          "You must be an admin or super user to add or delete products!"
        );
      }

      const { name } = args;

      const product = await Product.findOneAndDelete({ name });

      return product;
    },
  },
};

module.exports = resolvers;