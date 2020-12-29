import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import Alert from "@material-ui/lab/Alert";

import { useDispatch, useSelector } from "react-redux";
import * as registerActions from "./../../../actions/register.action";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  paper: {
    marginTop: theme.spacing(8),
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

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const registerReducer = useSelector(state => state.registerReducer)
  const registerReducer = useSelector(({ registerReducer }) => registerReducer);

  const showForm = ({
    values,
    handleChange,

    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <Form className={classes.form} noValidate>
        <Field
          variant="outlined"
          margin="normal"
          required
          component={TextField}
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          name="username"
          type="text"
        />
        <Field
          variant="outlined"
          margin="normal"
          required
          component={TextField}
          fullWidth
          onChange={handleChange}
          value={values.password}
          name="password"
          label="Password"
          type="password"
          id="password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={registerReducer.isFetching}
        >
          Create
        </Button>
        <Button
          onClick={() => props.history.goBack()}
          type="button"
          fullWidth
          variant="contained"
          color="default"
          className={classes.cancel}
        >
          Cancel
        </Button>
      </Form>
    );
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register
        </Typography>
        <Formik
          validate={(values) => {
            let errors = {};
            if (!values.username) errors.username = "Enter username";
            if (!values.password) errors.password = "Enter password";
            return errors;
          }}
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            // let formData = new FormData();
            // formData.append("username", values.username);
            // formData.append("password", values.password);
            dispatch(registerActions.register(values, props.history));
            setSubmitting(false);
          }}
        >
          {(props) => showForm(props)}
        </Formik>

        {registerReducer.isError && (
          <Alert severity="error" style={{ marginTop: 10 }}>
            {registerReducer.result && registerReducer.result.result}
          </Alert>
        )}
        {/* {registerReducer.result && JSON.stringify(registerReducer.result)} */}
      </CardContent>
    </Card>
  );
};
