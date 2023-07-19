import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/Rootlayout.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import { action as newPostAction } from "./routes/NewPost.jsx";
import PostDetails from "./routes/PostDetail";
import { loader as postDetailLoader } from "./routes/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/new", element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails/>, loader: postDetailLoader }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
