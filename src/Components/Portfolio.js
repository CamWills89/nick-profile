import React from "react";
import Style from "./Portfolio.module.scss";
import ReactPlayer from "react-player/youtube";

export default function Portfolio() {
  return (
    <main>
      <div className={Style.projectsGrid}>
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=W6NABTIyo2o" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=eC1uEUltnWw" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=jMptewfuVoQ" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=ut5ry1Zz0PM" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=xNDtq8biDHo" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=xD3TkB3VH7Y" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=3rVscwZMuuM" />
        <ReactPlayer width={'100%'} controls url="https://www.youtube.com/watch?v=UIoo9YIRen8" />
      </div>
    </main>
  );
}
