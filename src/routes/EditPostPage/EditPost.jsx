// import custom instance axios para enviar os dados para o servidor
import blogFetch from "../../axios/config.js";
// import react hooks
import { useState, useEffect } from "react";
// import custom hook from 'useNavigate' from react-router-dom.
// Uso para redirecionar automaticamente o usuário
// para uma outra página
import { useParams, useNavigate } from "react-router-dom";
// import CSS
import "./EditPost.css";

const EditPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;
      console.log({
        COD: response.status === 200 ? "Successs" : "ERROR",
      });
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    try {
      const response = await blogFetch.put(`/posts/${id}`, {
        body: post,
      });
      console.log({
        COD: response.status === 200 ? "Successs" : "ERROR",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="new-post edit-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo aqui"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
            rows={6}
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Editar Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
