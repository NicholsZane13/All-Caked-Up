import React, { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password, rememberMe);

    // TODO: Implement login functionality
    // try {
    //   const { data } = await login({
    //     variables: { email, password },
    //   });
    //
    //   Auth.login(data.login.token);
    //
    //   setSuccess("Login successful.");
    // } catch (e) {
    //   console.error(e);
    //   setError("Invalid email or password.");
    // }

    setEmail("");
    setPassword("");
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          error={error}
          variant="standard"
          sx={{ width: "100%" }}
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={error} htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            error={error}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            endAdornment={
              <InputAdornment position="end"> 

            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  </div>

  <div style={{ fontSize: "10px" }}>
    <Checkbox
      size="small"
      checked={rememberMe}
      onChange={handleRememberMe}
    />
    Remember Me
  </div>

  <div style={{ marginTop: "10px" }}>
    <Button
      variant="contained"
      fullWidth
      startIcon={<LoginIcon />}
      onClick={handleSubmit}
    >
      LOGIN
    </Button>
  </div>

  {error && (
    <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
      <Alert severity="error" size="small">
        {error}
      </Alert>
    </Stack>
  )}

  {success && (
    <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
      <Alert severity="success" size="small">
        {success}
      </Alert>
    </Stack>
  )}

  <div style={{ marginTop: "7px", fontSize: "10px" }} margin="left">
    <a>Forgot Password</a>
    <br />
    Do you have an account?{" "}
    <small style={{ textDecoration: "underline", color: "blue" }}>
      Sign Up
    </small>
  </div>
</div>
);
};

export default Login;  