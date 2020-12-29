import * as galleryActions from "./../../../actions/gallery.action";

import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { imageUrl } from "./../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Formik, Form, Field } from "formik";

import { TextField } from "formik-material-ui";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
  const galleryReducer = useSelector(({ galleryReducer }) => galleryReducer);
  const [selectedGallery, setSelectedGallery] = useState(null);

  useEffect(() => {
    let id = props.match.params.id; //id from gallerypage
    dispatch(galleryActions.getGalleryById(id));
  }, []);

  const handleDeleteConfirm = () => {
    console.log(selectedGallery);
    dispatch(galleryActions.deleteGallery(selectedGallery, props.history));
  };

  const showForm = ({ values, setFieldValue }) => {
    return (
      <Form>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Edit Post
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={() => <h3>Gallery ID# {values.gallery_id}</h3>}
              name="gallery_id"
              type="text"
              label="Id"
            />
            <br />

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
            <div className={classes.field}>{showPreviewImage(values)}</div>

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
              Edit
            </Button>
            <Button
              onClick={
                (setSelectedGallery(values.gallery_id), handleDeleteConfirm) //send gallery id and do handleDeleteConfirm
              }
              variant="contained"
              color="secondary"
              type="submit"
            >
              Delete
            </Button>
            {console.log(values)}
            <Button
              variant="contained"
              component={Link}
              to="/gallery"
              color="default"
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
    } else if (values.image) {
      return (
        <img
          src={`${imageUrl}/images/${values.image}`}
          style={{ height: 100 }}
        />
      );
    }
  };

  return (
    <Container className={classes.root}>
      {/* Main content */}
      <div className="box-body" style={{ marginTop: 30 }}>
        <Formik
          enableReinitialize
          initialValues={
            galleryReducer.result
              ? galleryReducer.result
              : { name: "loading", detail: "loading" }
          }
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();
            formData.append("gallery_id", values.gallery_id);
            formData.append("name", values.name);
            formData.append("detail", values.detail);
            if (values.file) {
              formData.append("image", values.file);
            }
            dispatch(galleryActions.updateGallery(formData, props.history));
          }}
        >
          {(props) => showForm(props)}
        </Formik>
      </div>
      {/* /.content */}
    </Container>
  );
};
