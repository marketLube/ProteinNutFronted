import React, { useEffect, useRef } from "react";
import "./Instagram.css";

const InstagramPost = ({ url }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        width: "35rem",
        height: "500px",
        overflow: "hidden",
        borderRadius: "30px",
        margin: "70px 80px",
      }}
    >
      <iframe className="post" height="500px" width="350px" src={url}></iframe>
    </div>
  );
};

export default InstagramPost;
