import axios from "axios";

const url = "http://172.27.226.95:5000/api/posts/";

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
    petname,
    weight,
    age,
    breed,
    neutered,
    ownername,
    gender,
    likes,
    dislikes,
    personality,
    contactinfo
  ) {
    return axios.post(url, {
      petname,
      weight,
      age,
      breed,
      neutered,
      ownername,
      gender,
      likes,
      dislikes,
      personality,
      contactinfo,
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
