const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    petname: req.body.petname,
    weight: req.body.weight,
    age: req.body.age,
    breed: req.body.breed,
    gender: req.body.gender,
    neutered: req.body.neutered,
    image: req.body.image,
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
