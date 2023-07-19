import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModalHandler = () => {
  //   setShowModal((prevState) => !prevState);
  // };

  return (
    <>
      <Outlet/>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () =>{
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
