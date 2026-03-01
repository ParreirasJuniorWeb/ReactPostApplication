// import custom instance axios para obter os dados para o servidor
import blogFetch from "../../axios/config.js";
// import react hooks
import { useState, useEffect, useRef } from "react";
// import custom hook from 'useParams' from react-router-dom.
// Uso para obter o parâmetro de pesquisa da URL passada
// de uma página a outra página
import { useParams } from "react-router-dom";
// import CSS
import "./Post.css";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const postRef = useRef();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      console.log({
        COD: response.status === 200 ? "Successs" : "ERROR",
      });
      setPost(data);
      scrollParaElemento(postRef.current.id);
    } catch (error) {
      console.log(error);
    }
  };

  function scrollParaElemento(elementId) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Elemento com ID "${elementId}" não encontrado.`);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {post === null && !post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post" ref={postRef} id="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
