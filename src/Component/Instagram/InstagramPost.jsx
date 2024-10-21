import React, { useEffect, useRef } from "react";
import "./Instagram.css";
// import YouTube from "react-youtube";

const InstagramPost = ({ url }) => {
  const ref = useRef(null);

  const opts = {
    height: "500", // Set your desired height
    width: "500", // Set your desired width
    playerVars: {
      rel: 0, // Prevent related videos from showing after video ends
      modestbranding: 1, // Reduces the YouTube logo on the control bar
      autoplay: 0, // Turn autoplay on or off
      controls: 1, // 0 to hide player controls (like play, pause, etc.)
      showinfo: 0, // Deprecated, use 'modestbranding'
      disablekb: 1, // Disable keyboard controls
    },
  };

  return (
    <div ref={ref} className="reelsDisplay">
      <iframe
        width="500px"
        height="500px"
        // className="post"
        src="https://www.youtube.com/embed/-Hvwzm8sJBQ?rel=0"
        title="YouTube video player"
        rel={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default InstagramPost;
