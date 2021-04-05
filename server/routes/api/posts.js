const express = require("express");
const path = require("path");
const mongodb = require("mongodb");
const multer = require("multer");
const crypto = require("crypto");
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");

// Mongo URI
const mongoURI =
  "mongodb+srv://abc123:dbUserPassword@vueexpress.y3gki.mongodb.net/vue_express?retryWrites=true&w=majority";

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  // is posts collection correct?
  gfs.collection("posts");
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "posts",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Get /api/posts/:filename
router.get("/:filename", async (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    // File exists
    return res.json(file);
  });
});

// Get /api/image/:filename
router.get("/image/:filename", async (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }
    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

// Add Post
router.post("/", upload.single("petImage"), async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    petname: req.body.petname,
    weight: req.body.weight,
    age: req.body.age,
    breed: req.body.breed,
    gender: req.body.gender,
    neutered: req.body.neutered,
    petImage: req.file,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    personality: req.body.personality,
    ownername: req.body.ownername,
    contactinfo: req.body.contactinfo,
    createdAt: new Date(),
    text: req.body.text,
  });
  res.status(201).send();
});

// Delete Post
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://abc123:dbUserPassword@vueexpress.y3gki.mongodb.net/vue_express?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  return client.db("vue_express").collection("posts");
}

module.exports = router;
