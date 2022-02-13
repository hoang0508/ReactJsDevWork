import React from "react";
import "./YoutubeSearch.scss";
import moment from "moment";
const YoutubeSearch = () => {
  return (
    <div className="youtube">
      <form action="#" className="youtube-form">
        <input type="text" className="youtube-search" />
        <button className="youtube-btn">Search</button>
      </form>
      <div className="youtube-list">
        <div class="youtube-item">
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
