const express = require("express");
const mongodb = require("mongodb");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg and .png files accepted"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
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
    petImage: req.file.path,
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
