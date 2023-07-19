
import classes from "./NewPost.module.css";
import { BsSendPlus } from "react-icons/bs";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";


const NewPost = () => {
  
 

  return (
    <Modal>
    <Form className={classes.form} method="post">
      <p>
        <label htmlFor="body">Post content:</label>
        <textarea
          id="body"
          required
          rows={3}
          name="body"
        />
      </p>
      <p>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          required
          name="author"
        />
      </p>
      <div className={classes.actions}>
        <button type="Submit" className={classes.iconBtn}>
          <BsSendPlus />
          Submit
        </button>
        <Link type="button" to={'..'} className={classes.button}>
          Close
        </Link>
      </div>
    </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({request}) =>{
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('/');
};