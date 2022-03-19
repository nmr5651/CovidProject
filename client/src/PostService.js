/* eslint-disable */

import axios from "axios";

const url = "http://localhost:5000/api/posts";

class PostService {
  // Get Post

  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  static getPostsNew(text){
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/search", {params: {county: text}});
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default PostService;
