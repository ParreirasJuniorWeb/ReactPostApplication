// import custom instance axios para enviar os dados para o servidor
import blogFetch from "../../axios/config.js";
// import react hooks
import { useState } from "react";
// import custom hook from 'useNavigate' from react-router-dom.
// Uso para redirecionar automaticamente o usuário
// para uma outra página
import { useNavigate } from "react-router-dom";
// import CSS
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    if (!title && !body) return alert("Os campos deverão ser preenchidos!");

    const post = { title, body, userId: 1 };

    const response = await blogFetch.post("/posts", {
      body: post,
    });

    console.log({
      COD: response.status === 201 ? "Successs" : "ERROR"
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Insira novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo aqui"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Criar Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
