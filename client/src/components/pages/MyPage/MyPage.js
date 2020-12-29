import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as myloginActions from "./../../../actions/mylogin.action";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 80,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MyPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myloginReducer = useSelector(({ myloginReducer }) => myloginReducer);
  // useEffect(() => {
  //   loginActions.isLoggedIn() && props.history.push("/stock");
  // }, []);

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.password}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        {/* {loginReducer.isError && (
          <Alert severity="error" style={{ marginBottom: 8 }}>
            Invalid account!
          </Alert>
        )} */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={myloginReducer.isFetching}
          className={classes.submit}
        >
          Sign In
        </Button>
        {myloginReducer.isFetching && (
          <CircularProgress style={{ marginTop: 10 }} />
        )}
        <Grid container justify="flex-end">
          <Link component={RouterLink} to="/register" variant="body2">
            Don't have an account? Register
          </Link>
        </Grid>
      </form>
    );
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(myloginActions.login(values));
          }}
        >
          {(props) => showForm(props)}
        </Formik>
        <span style={{ fontSize: 10 }}>
          #Debug:{" "}
          {myloginReducer.result && JSON.stringify(myloginReducer.result)}
        </span>
      </CardContent>
    </Card>
  );
}
