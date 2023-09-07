import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VideoGallery.css";
import VideoCard from "./VideoCard";

const VideoGallery = ({ search, numResult }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=${numResult}`
      )
      .then((value) => setValue(value.data.results))
      .catch((e) => console.log(e));
  }, [search, numResult]);

  return (
    <div className="gallery">
      {value.map((e, i) => (
        <VideoCard key={i} video={e} />
      ))}
    </div>
  );
};

export default VideoGallery;