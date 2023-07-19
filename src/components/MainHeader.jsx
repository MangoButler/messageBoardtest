import { GiFeather } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";

import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <GiFeather />
        Just another Message Board
      </h1>
      <p>
        <Link to={'/new'} className={classes.button}>
          <HiOutlineSparkles />
          Add Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
