import axios from "axios";

const url = "http://localhost:5000/api/posts/";

/* eslint-disable no-async-promise-executor */

class PostService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  // Create Post
  static insertPost(
    formData
    /*petname,
    weight,
    age,
    breed,
    neutered,
    ownername,
    gender,
    petImage,
    likes,
    dislikes,
    personality,
    contactinfo*/
  ) {
    return axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function() {
        console.log("SUCCESS!!");
      })
      .catch(function() {
        console.log("FAILURE");
      });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
