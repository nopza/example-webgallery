import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "./../../../constants";
import * as galleryActions from "./../../../actions/gallery.action";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";

import {
  Grid,
  Container,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//////////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  star: {
    color: "red",
  },
  orderList: {
    overflowX: "hidden",
    height: 490,
    flex: 1,
    width: "100%",
    maxHeight: 490,
  },
  orderListItem: {
    height: 100,
    maxHeight: 100,
  },
  productContainer: {
    height: "100%",
    marginBottom: 20,
  },
  leftLabel: {
    marginLeft: 20,
  },
  rightLabel: {
    marginRight: 20,
  },
  showcard: {
    background: "#f1f1f1",
    "&:hover": {
      background: "#93a1ae",
    },
  },
  card: {
    display: "block",
    width: "100%",
  },
}));

export default (props) => {
  const galleryReducer = useSelector(({ galleryReducer }) => galleryReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { resultlist } = galleryReducer;

  useEffect(() => {
    dispatch(galleryActions.getGallerys());
  }, []); // get data when refresh

  const handleDelete = (gallery_id) => {
    dispatch(galleryActions.deleteGalleryAll(gallery_id))
  };

  return (
    <Card className={classes.root}>
      <Typography variant="h3" style={{ padding: "20px 10px" }}>
        Gallery Page
      </Typography>
      <div style={{ padding: "20px 10px" }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/gallery/create"
        >
          Create Post
        </Button>
      </div>
      <Container>
        <Grid container spacing={1} className={classes.productContainer}>
          {console.log(resultlist)}
          {resultlist !== null &&
            resultlist.map((item, i) => (
              <Grid key={i} item xs={3}>
                <Card className={(classes.showcard, classes.card)}>
                  <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={() => handleDelete(item.gallery_id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton
                      aria-label="edit"
                      component={Link}
                      to={`/gallery/edit/${item.gallery_id}`}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={`${imageUrl}/images/${item.image}?${Date.now()}`} //render new image from Date.now
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography noWrap gutterBottom>
                        {item.name}
                      </Typography>
                      <Typography noWrap gutterBottom>
                        {item.username}
                      </Typography>
                      <Typography noWrap gutterBottom>
                        {item.detail}
                      </Typography>
                      <Grid
                        container
                        style={{
                          height: 24,
                          display: "flex",
                          flexDirection: "row",
                          alignitem: "center",
                        }}
                      ></Grid>
                      {/* //send Props */}
                      {/* <Button type="button" component={Link} to={`/gallery/edit/${item.gallery_id}`} >
                            Edit
                          </Button> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Card>
  );
};
