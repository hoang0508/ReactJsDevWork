import React, { useEffect, useState } from "react";
import axios from "axios";
import "./YoutubeSearch.scss";
import moment from "moment";

const YoutubeSearch = () => {
  // const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleChangeVideo = (e) => {
    setQuery(e.target.value);
  };

  const handleClickSearch = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCLeO_jhqC_ezvqrVxVFPFEEZ6fqrFP9Qw",
        q: query,
      },
    });
    console.log(res);
  };
  return (
    <div className="youtube">
      <form action="#" className="youtube-form">
        <input
          type="text"
          onClick={(e) => handleChangeVideo(e)}
          className="youtube-search"
        />
        <button onClick={(e) => handleClickSearch(e)} className="youtube-btn">
          Search
        </button>
      </form>
      <div className="youtube-list">
        <div className="youtube-item">
          <div className="youtube-video">
            <iframe
              className="youtube-ifr"
              src="https://www.youtube.com/embed/XNI07WNrSqw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube-content">
            <h3 className="youtube-title">
              Hướng dẫn mua khóa học ReactJS cơ bản đến nâng cao của Evondev
            </h3>
            <div className="youtube-date">
              {moment("2021-05-14T16:19:57Z").format("DD-MM-YYYY hh:mm:ss A")}
            </div>
            <div className="youtube-author">Evondev</div>
            <div className="desc">
              Hướng dẫn mua khóa học ReactJS cơ bản đến nâng cao của Evondev
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSearch;
