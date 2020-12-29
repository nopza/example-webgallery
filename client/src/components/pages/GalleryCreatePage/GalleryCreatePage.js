import * as galleryActions from "./../../../actions/gallery.action";

import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { TextField } from "formik-material-ui";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
  button: {
    justifyContent: "flex-end",
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const showForm = ({ values, setFieldValue }) => {
    return (
      <Form>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Create New Post
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />

            <br />
            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="detail"
              type="text"
              label="Detail"
            />

            <div>{showPreviewImage(values)}</div>

            <div className={classes.field}>
              {/* <img
                src={`${process.env.PUBLIC_URL}/images/ic_photo.png`}
                style={{ width: 25, height: 20 }}
              />
              <span style={{ color: "#00B0CD", marginLeft: 10 }}>
                Add Picture
              </span> */}
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload image
                <input
                  type="file"
                  onChange={(e) => {
                    e.preventDefault();
                    if (e.target.files[0]) {
                      setFieldValue("file", e.target.files[0]); // for upload
                      setFieldValue(
                        "file_obj",
                        URL.createObjectURL(e.target.files[0])
                      ); // for preview image
                    } else {
                      setFieldValue("file", null); //for upload
                      setFieldValue("file_obj", null); //for preview image
                    }
                  }}
                  name="image"
                  click-type="type1"
                  className="picupload"
                  multiple
                  accept="image/*"
                  id="files"
                  style={{ padding: "20px 0" }}
                  hidden
                />
              </Button>
            </div>
          </CardContent>
          <CardActions className={classes.button}>
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/gallery"
              color="default"
              raised
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const showPreviewImage = (values) => {
    if (values.file_obj) {
      return <img src={values.file_obj} style={{ height: 100 }} />;
    }
  };

  return (
    <Container className={classes.root}>
      {/* Main content */}

      <div className="box-body" style={{ marginTop: 30 }}>
        <Formik
          validate={(values) => {
            let errors = {};
            if (!values.name) errors.name = "Enter name";
            if (!values.detail) errors.detail = "Enter detail";
            return errors;
          }}
          initialValues={{ name: "", detail: "" }}
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();
            formData.append("name", values.name);
            formData.append("detail", values.detail);
            formData.append("image", values.file);
            dispatch(galleryActions.addGallery(formData, props.history));
            setSubmitting(false);
          }}
        >
          {(props) => showForm(props)}
        </Formik>
      </div>
      {/* /.content */}
    </Container>
  );
};
