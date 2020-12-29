import React, { useState, useEffect } from "react";
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
// import * as loginActions from "./../../../actions/login.action";
import * as myregisterActions from "./../../../actions/myregister.action";
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

export default function MyRegisterPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myregisterReducer = useSelector(
    ({ myregisterReducer }) => myregisterReducer
  );
  // const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  // useEffect(() => {
  //   loginActions.isLoggedIn() && props.history.push("/stock");
  // }, []);

  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    errors,
  }) => {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          error={errors.username}
          helperText={errors.username}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="off"
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
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.confirmpassword}
          name="confirmpassword"
          label="ConfirmPassword"
          type="password"
          id="confirmpassword"
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.firstname}
          name="firstname"
          label="Firstname"
          type="text"
          id="firstname"
          autoComplete="off"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.lastname}
          name="lastname"
          label="Lastname"
          type="text"
          id="lastname"
          autoComplete="off"
        />

        {/* {loginReducer.isError && (
          <Alert severity="error" style={{ marginBottom: 8 }}>
            Invalid account!
          </Alert>
        )} */}

        {isError && (
          <Alert severity="error" style={{ marginBottom: 8 }}>
            {errorMessage}
          </Alert>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={myregisterReducer.isFetching}
          className={classes.submit}
        >
          Sign Up
        </Button>
        {myregisterReducer.isFetching && (
          <CircularProgress style={{ marginTop: 10 }} />
        )}
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
          Register
        </Typography>
        <Formik
          initialValues={{
            username: "",
            password: "",
            firstname: "",
            lastname: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(myregisterActions.register(values));
          }}
        >
          {(props) => showForm(props)}
        </Formik>
        <span>{JSON.stringify(myregisterReducer.result)}</span>
        {/* {username: "", } */}
      </CardContent>
    </Card>
  );
}
