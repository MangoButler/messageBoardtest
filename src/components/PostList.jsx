import React from "react";
import Post from "./post";
import classes from "./PostList.module.css";
// import { useState,  useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// import dummyPosts from "../Dummy-posts";

const PostList = (props) => {
  const posts = useLoaderData();
//   const [fetchError, setFetchError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsFetching(true);
//       try {
//         const response = await fetch("http://localhost:8080/posts");
//         if (!response.ok) {
//           throw new Error();
//         }
//         const data = await response.json();
//         setPosts(data.posts);
//         setIsFetching(false);
//       } catch (error) {
//         setFetchError("Something went wrong");
//         setIsFetching(false);
//       }
//     };
//     fetchPosts();
//     console.log("fetched posts");
//   }, []);



  return (
    <>
      {posts.length === 0 && (
        <div className={classes.fallback}>
          <h2>No posts yet!</h2>
          <p>Start by adding some!</p>
        </div>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              author={post.author}
              body={post.body}
              id={post.id}
              key={post.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
