import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Gmail from "./Gmail";
import history from "./history";
import { Provider } from "react-redux";
import { useState } from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  let dispatch = useDispatch();

  const handleLogin = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      console.log(e.target.value);
      dispatch({
        type: "SET_EMAIL",
        email: e.target.value,
      });
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/gmail");
  };

  const Login = () => (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter 'Harry', 'Crystal', 'Gazelle'"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => handleLogin(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              required
              fullWidth
              name="password"
              onChange={(e) => handleLogin(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handleSubmit(e)}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  return (
    <div className="App">
      {/* <Provider> */}
      {/* <BrowserRouter> */}
      <Router history={history}>
        <Switch>
          {/* <Login /> */}
          <Route exact path="/">
            {Login}
          </Route>
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/gmail" render={() => <Gmail email={email} />} />
        </Switch>
      </Router>
      {/* </BrowserRouter> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
