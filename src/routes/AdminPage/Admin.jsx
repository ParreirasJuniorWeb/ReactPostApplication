// import custom instance axios para editar ou excluir os dados do servidor
import blogFetch from "../../axios/config.js";
// import react hooks
import { useState, useEffect } from "react";
// components from react-router-dom
// Link para redirecionamento de páginas
import { Link } from "react-router-dom";
// import CSS
import "./Admin.css";

const Admin = () => {
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

  const deletePost = async (id) => {
    try {
      const response = await blogFetch.delete(`/posts/${id}`);
      console.log({
        COD: response.status === 200 ? "Success" : "ERROR",
      });

      const filteredPosts = posts.filter((post) => post.id !== id);

      setPosts(filteredPosts);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts && posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="actions">
              <Link className="btn edit-btn"
              to={`/posts/edit/${post.id}`}
              >
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
