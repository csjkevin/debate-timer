import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

interface Props {
  linkTo?: string;
}

const IndexButton: React.FC<Props> = (props) => {
  const { linkTo = "", children } = props;
  return (
    <Link to={linkTo}>
      <div className={styles.buttonContainer}>
        <button>{children}</button>
      </div>
    </Link>
  );
};

export default IndexButton;
