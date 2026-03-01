import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import React-Router-Dom components e useHooks:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./routes/HomePage/Home.jsx";
import NewPost from "./routes/NewPostPage/NewPost.jsx";
import Post from "./routes/PostPage/Post";
import Admin from "./routes/AdminPage/Admin";
import EditPost from "./routes/EditPostPage/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
