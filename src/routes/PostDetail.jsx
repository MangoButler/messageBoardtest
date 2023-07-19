import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetail.module.css";

const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Post cannot be found!</h1>
          <p>It might be hidding somewhere else...</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay!
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <h1 className={classes.author}>{post.author}</h1>
        <p className={classes.text}>{post.body}</p>
        <p>
          <Link to=".." className={classes.btn}>
            Go back!
          </Link>
        </p>
      </main>
    </Modal>
  );
};

export default PostDetails;

export const loader = async ({ params }) => {
  const response = await fetch("http://localhost:8080/posts/" + params.id); //use the same identifier as inh the route definition
  const resData = await response.json();
  return resData.post;
};
