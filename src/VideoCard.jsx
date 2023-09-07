import React, { createRef, useState } from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
  const [model, setModel] = useState(false);
  const card = createRef(null);
  const openModel = () => {
    card.current.classList.remove("video");
    card.current.classList.add("model");
    setModel(true);
  };
  const closeModel = () => {
    card.current.classList.add("video");
    card.current.classList.remove("model");
    setModel(false);
  };
  return (
    <>
      <div ref={card} className="video">
        {model && (
          <button className="model-close-btn" onClick={() => closeModel()}>
            x
          </button>
        )}
        <div className="video-container" onClick={() => openModel()}>
          <div className="name">{video.heading}</div>
          <video src={video.video} type="video/webm" style={{ width: "100%"}} autoPlay={model} controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}> </video>

          <ul className="tags">
            {video.tags.map((e, i) => (
              <li key={i} className="tag">
                {e.split(' ')[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoCard;