import React, { Fragment, useState } from "react";
import {
  Container,
  IconButton,
  makeStyles,
  TextField,
  withStyles,
} from "@material-ui/core";
import "../styles/LoginPageComponent.css";
import {
  AccountCircle,
  Language,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import themeColor from "./Apptheme";

const useStyles = makeStyles((theme) => ({
  emailbox: {
    width: "73vw",
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  otherbox: {
    width: "73vw",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: themeColor[0],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: themeColor[1],
      },
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
  const [values, setValues] = useState({
    email: "",
    password: "",
    timezone: "",
    showPassword: false,
  });

  const [signup, setSignup] = useState(false);

  const handleChange = (prop) => (event) => {
    console.log(prop);
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
        <h2 className="login_heading">Welcome Coder!!!</h2>
      </Container>
      <Container className="login_container">
        <Container>
          <form noValidate className="login_form">
            <Container>
              <CssTextField
                className={classes.emailbox}
                label="Email ID"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
                variant="outlined"
                labelWidth={60}
                required
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end">
                      <AccountCircle style={{ color: themeColor[1] }} />
                    </IconButton>
                  ),
                }}
              />
            </Container>

            <Container>
              <CssTextField
                className={classes.otherbox}
                label="Password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange("password")}
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
                      {values.showPassword ? (
                        <Visibility style={{ color: themeColor[1] }} />
                      ) : (
                        <VisibilityOff style={{ color: themeColor[1] }} />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Container>
            {signup && (
              <Container>
                <CssTextField
                  className={classes.otherbox}
                  label="TimeZone"
                  onChange={handleChange("timezone")}
                  variant="outlined"
                  labelWidth={60}
                  required
                  InputProps={{
                    endAdornment: (
                      <IconButton edge="end">
                        <Language style={{ color: themeColor[1] }} />
                      </IconButton>
                    ),
                  }}
                />
              </Container>
            )}
          </form>
        </Container>
        <Container className="login_buttonContainer">
          {!signup && (
            <button
              className="login_button"
              onClick={() => alert(JSON.stringify(values))}
            >
              <h2>LogIn</h2>
            </button>
          )}
          {!signup && <h3 className="login_or">--------OR--------</h3>}
          {!signup && (
            <button
              className="signup_button"
              onClick={() => setSignup(!signup)}
            >
              <h2>SignUp</h2>
            </button>
          )}
          {signup && (
            <button
              className="signup_button"
              onClick={() => alert(JSON.stringify(values))}
            >
              <h2>Done!!!</h2>
            </button>
          )}
          {signup && (
            <h5 className="login_goback" onClick={() => setSignup(!signup)}>
              Go Back to LogIn
            </h5>
          )}
        </Container>
      </Container>
    </Fragment>
  );
};
