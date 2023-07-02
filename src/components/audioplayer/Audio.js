import React from "react";
import ReactAudioPlayer from "react-audio-player";
import warm from "../../audio/warm.mp3";
import ReactPlayer from "react-player";

const Audio = () => {
  return (
    <div style={{ position: "absolute" }}>
      <ReactAudioPlayer src={warm} autoPlay/>

      {/* <audio autoplay={true} controls>
        <source src={warm} type="audio/mp3" />
      </audio> */}
      {/* <ReactPlayer
        playing
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      /> */}
    </div>
  );
};

export default Audio;
