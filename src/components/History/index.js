import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import media from "styled-media-query";
// import useMedia from 'use-media';

import { addHistory } from "../../features/counter/counterSlice";

const History = ({ videos }) => {
  useEffect(() => {
    setHistory(videos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  const histories = useSelector((state) => state.counter.items);
  const dispatch = useDispatch();
  // const isWide = useMedia({minWidth: '640px'});

  const Style = styled.li`
    display: block;
    background: #FBC281;
    ${media.greaterThan("medium")`
    display: flex;
    background: #FBC281;
  `}
  `;
  const Title = styled.div`
    margin: 30px;
    justify-content: center;
    align-items: center;

    ${media.greaterThan("medium")`
    width:100%;
    margin-top:70px;
    justify-content: center;
    align-items: center;
  `}
  `;

  const History = styled.ul`
    margin: 50px 150px ;
    text-align: center;    
    display: grid;
    row-gap: 40px;

    ${media.greaterThan("medium")`
    margin: 50px 200px ;
    text-align: center;    
    display: grid;
    row-gap: 40px;
    `}
`;

  // [0].snippet.thumbnails.default.url
  const setHistory = (videos) => {
    console.log(videos[0]);
    if (videos.length !== 0) {
      const videoInfo = {
        title: videos[0].snippet.title,
        url: videos[0].snippet.thumbnails.high.url,
        channelTitle: videos[0].snippet.channelTitle,
      };
      dispatch(addHistory(videoInfo));
    }
  };

  const listItem = histories.map((video, i) => {
    // const displayParam = (() => {
    //   if (
    //     window.matchMedia &&
    //     window.matchMedia("(max-device-width: 640px)").matches
    //   ) {
    //     return "block";
    //   } else {
    //     return "flex";
    //   }
    // })();
    return (
      // <li style={{ display: "flex", backgroundColor: "#F3F6FB" }}>
      <Style>
        <figure>
          <img src={video.url} alt="" />
        </figure>
        <Title>
          <h3 style={{ marginBottom: "20px" }}>『　{video.title}　』</h3>
          <h3>{video.channelTitle}</h3>
        </Title>
      </Style>
    );
  });

  return (
    <div style={{background:"#F8B62D" }}>
      <h2 style={{ padding:"25px", textAlign: "center" ,height:"70px" ,fontWeight:"bold"}}>History</h2>
      <History      >
        {listItem}
      </History>
    </div>
  );
};

export default History;
