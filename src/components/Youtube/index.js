import React from "react";

const Youtube = (props , index) => {
  const video = props.videos.map((video) => {
    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    return (
      <div style={{ margin: "20px", textAlign: "center" }}>
        <iframe
        key={index}
          id="ytplayer"
          type="ytplayer"
          width="480"
          height="270"
          src={url}
          frameborder="0"
          title="video"
        />
      </div>
    );
  });

  return <div style={{ marginTop: "10px" }}>{video}</div>;
};

export default Youtube;
