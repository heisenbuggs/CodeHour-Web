import React, { Fragment, useState } from "react";
import {
  Container,
  IconButton,
  makeStyles,
  MenuItem,
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
import timezoneAll from "./timezones";

const useStyles = makeStyles((theme) => ({
  emailbox: {
    width: "90%",
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  otherbox: {
    width: "90%",
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
  const [touchmail, setTouchmail] = useState(false);
  const [touchpass, setTouchpass] = useState(false);
  const [touchtime, setTouchtime] = useState(false);

  const touch = (e) => {
    if (e === "touchmail") setTouchmail(true);
    else if (e === "touchpass") setTouchpass(true);
    else if (e === "touchtime") setTouchtime(true);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateMail = (mail) => {
    // Tells mail is correct
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    return false;
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
                onFocus={() => touch("touchmail")}
                onChange={handleChange("email")}
                style={{ width: "90%" }}
                error={touchmail && !validateMail(values.email)}
                helperText={
                  touchmail && !validateMail(values.email)
                    ? "Email ID not valid!"
                    : ""
                }
                variant="outlined"
                labelWidth={50}
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
                onFocus={() => touch("touchpass")}
                onChange={handleChange("password")}
                error={touchpass && values.password === ""}
                helperText={
                  touchpass && values.password === ""
                    ? "Password not valid!"
                    : ""
                }
                variant="outlined"
                labelWidth={50}
                style={{ width: "90%" }}
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
                  onFocus={() => touch("touchtime")}
                  value={values.timezone}
                  select
                  error={touchtime && values.timezone === ""}
                  helperText={
                    touchtime && values.timezone === ""
                      ? "Enter the correct Timezone!"
                      : ""
                  }
                  onChange={handleChange("timezone")}
                  style={{ width: "90%" }}
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
                >
                  {timezoneAll.map((e) => (
                    <MenuItem value={e}>{`GMT ${e}`}</MenuItem>
                  ))}
                </CssTextField>
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
              <h2 className="button_name">LogIn</h2>
            </button>
          )}
          {!signup && <h3 className="login_or">--------OR--------</h3>}
          {!signup && (
            <button
              className="signup_button"
              onClick={() => setSignup(!signup)}
            >
              <h2 className="button_name">SignUp</h2>
            </button>
          )}
          {signup && (
            <button
              className="signup_button"
              onClick={() => alert(JSON.stringify(values))}
            >
              <h2 className="button_name">Register</h2>
            </button>
          )}
          {signup && (
            <h4 className="login_goback" onClick={() => setSignup(!signup)}>
              Go Back to LogIn
            </h4>
          )}
        </Container>
      </Container>
    </Fragment>
  );
};
