import React, { Fragment } from "react";
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  TextField,
  withStyles,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../styles/LoginPageComponent.css";
import { AccountCircle } from "@material-ui/icons";
import themeColor from "./Apptheme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  textField: {
    width: "40ch",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: themeColor[0],
      },
      "&.Mui-focused fieldset": {
        borderColor: themeColor[0],
      },
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: themeColor[0],
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: themeColor[0],
      },
      "&.Mui-focused fieldset": {
        borderColor: themeColor[0],
      },
    },
  },
})(TextField);

export const LoginPageComponent = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    country: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <Container className="login_wave">
        <img src="./assets/full-logo.png" alt="logo" />
      </Container>
      <Container className="login_container">
        <h2 className="login_heading">Welcome Coder!!!</h2>
        <Container>
          <form noValidate>
            <CssTextField
              className={classes.margin}
              label="Email ID"
              // value={values.email}
              variant="outlined"
              labelWidth={60}
              required
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                ),
              }}
            />

            <CssTextField
              className={classes.margin}
              label="Password"
              variant="outlined"
              labelWidth={60}
              type={values.showPassword ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
          </form>
        </Container>
        <Button variant="contained">Login</Button>
      </Container>
    </Fragment>
  );
};
