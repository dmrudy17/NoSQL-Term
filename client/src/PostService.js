import axios from "axios";

const url = "http://localhost:5000/api/posts/";
const emailUrl = "http://localhost:5000/api/posts/email/";

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
  static insertPost(formData) {
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

  // Send notification email
  static sendEmail(petname, email) {
    return axios.post(emailUrl, {
      petname,
      email,
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
