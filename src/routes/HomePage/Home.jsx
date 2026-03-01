// import axios ou uma global instance custom do axios
// para as requisições HTTP
import blogFetch from "../../axios/config.js";
// react Hooks
import { useState, useEffect } from "react";
// components from react-router-dom
// Link para redirecionamento de páginas
import { Link } from "react-router-dom";
// import CSS
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");
      const data = response.data;
      console.log({
        COD: response.status === 200 ? "Successs" : "ERROR",
      });
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts && posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
