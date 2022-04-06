import React, { useState, useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import axios from "axios";

function Blog() {
  const [posts, setPoststs] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPoststs(response.data);
    };

    getPosts();
  }, []);
  return (
    <section className="services">
      <h1 style={{ textAlign: "center" }}>My Blog</h1>
      <div className="container">
        <Posts posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
