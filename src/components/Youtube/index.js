import React from "react";

const Youtube = (props, index) => {
  const video = props.videos.map((video, i) => {
    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    return (
      <div
        style={
          {
            // display:"frex",
            // margin: "50px",
            padding:"30px",
            textAlign: "center",
            // width:"480px",
            height:"400px",
            background:"#ABD9E7"
          }
        }
        key={`${i + url}`}
      >
        <iframe
          key={index}
          id="ytplayer"
          type="ytplayer"
          width="70%"
          height="100%"
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
