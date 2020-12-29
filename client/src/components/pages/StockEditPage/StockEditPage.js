import * as stockActions from "./../../../actions/stock.action";

import React, { useEffect } from "react";
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
import { Label } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginTop: 100,
  },
  field: {
    marginTop: 16,
  },
  card: {
    padding: 20,
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stockReducer = useSelector(({ stockReducer }) => stockReducer);

  useEffect(() => {
    let id = props.match.params.id;
    dispatch(stockActions.getProductById(id));
  }, []);

  const showForm = ({ values, setFieldValue }) => {
    return (
      <Form>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Edit Product
            </Typography>

            <Field
              className={classes.field}
              fullWidth
              component={() => <h3>Product ID# {values.product_id}</h3>}
              name="product_id"
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
              name="price"
              type="number"
              label="Price"
            />

            <Field
              className={classes.field}
              fullWidth
              component={TextField}
              name="stock"
              type="number"
              label="Stock"
            />

            <div className={classes.field}>{showPreviewImage(values)}</div>

            <div className={classes.field}>
              <img
                src={`${process.env.PUBLIC_URL}/images/ic_photo.png`}
                style={{ width: 25, height: 20 }}
              />
              <span style={{ color: "#00B0CD", marginLeft: 10 }}>
                Add Picture
              </span>
              <input
                type="file"
                onChange={(e) => {
                  e.preventDefault();
                  setFieldValue("file", e.target.files[0]); // for upload
                  setFieldValue(
                    "file_obj",
                    URL.createObjectURL(e.target.files[0])
                  ); // for preview image
                }}
                name="image"
                click-type="type1"
                className="picupload"
                multiple
                accept="image/*"
                id="files"
                style={{ padding: "20px 0" }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" type="submit">
              Edit
            </Button>
            <Button component={Link} to="/stock" color="default" raised>
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
            stockReducer.result
              ? stockReducer.result
              : { name: "loading", price: 0, stock: 0 }
          }
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();
            formData.append("product_id", values.product_id);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("stock", values.stock);
            if (values.file) {
              formData.append("image", values.file);
            }
            dispatch(stockActions.updateProduct(formData, props.history));
          }}
        >
          {(props) => showForm(props)}
        </Formik>
      </div>
      {/* /.content */}
    </Container>
  );
};
