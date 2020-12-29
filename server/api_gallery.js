const express = require("express");
const jwt = require("./jwt");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");

const router = express.Router();
const Gallerys = require("./models/gallery_schema");

// router.get("/gallery", (req, res) => {
//   res.end("gallery");
// });

router.get("/gallery", jwt.verify, async (req, res) => {
  var query = { username: req.username };
  const gallerys = await Gallerys.find(query).sort({ created: -1 });
  gallerys.username = req.username;
  res.json(gallerys);
});

// Upload Image
uploadGalleryImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.name.split(".")[1]; //["namedog","jpg"]
    doc.image = `${doc.gallery_id}.${fileExtention}`; //48.jpg
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

    if (fs.existsSync(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.image.path, newpath);

    // Update database
    await Gallerys.findOneAndUpdate({ gallery_id: doc.gallery_id }, doc);
  }
};

// Add Gallery
router.post("/gallery", jwt.verify, async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      fields.username = req.username;
      let doc = await Gallerys.create(fields); // insert
      await uploadGalleryImage(files, doc); // save image
      res.json({ result: "ok", message: JSON.stringify(doc) }); // reply result
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

// Update Gallery
router.put("/gallery", (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await Gallerys.findOneAndUpdate(
        { gallery_id: fields.gallery_id },
        fields
      );
      await uploadGalleryImage(files, fields);

      res.json({ result: "ok", message: JSON.stringify(doc) });
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

// Get single
router.get("/gallery/id/:id", async (req, res) => {
  let doc = await Gallerys.findOne({ gallery_id: req.params.id });
  res.json(doc);
});

// Get gallery by keyword
router.get("/gallery/name/:keyword", async (req, res) => {
  console.log("get gallerys by keyword");
  var query = { name: new RegExp("^.*" + req.params.keyword + ".*$", "i") };
  let doc = await Gallerys.find(query);
  res.json(doc);
});

const deleteImage = async (doc) => {
  var newpath = path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

  if (fs.existsSync(newpath)) {
    await fs.remove(newpath);
  }
};

// Delete Gallery
router.delete("/gallery/id/:id", async (req, res) => {
  console.log(req.params.id);
  let doc = await Gallerys.findOneAndDelete({ gallery_id: req.params.id });
  deleteImage(doc);
  res.json({ result: "ok", message: JSON.stringify(doc) });
});

module.exports = router;
