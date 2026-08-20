import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

const BlogItemGrid = ({
  id,
  image,
  title,
  slides,
  published,
  excerpt,
  type,
}) => {
  const blogURL = `/blog/${title
    .replace(/\//g, "-")
    .replace(/\s/g, "-")
    .toLocaleLowerCase()}?id=${id}`;

  return (
    <div
      className={
        "col-md-4 mt-50 " + (type === "video" ? "blog-grid-video" : "")
      }
    >
      <div className={"post " + (type === "video" ? "video-alpha" : "")}>
        <div className="post-img">
          <img
            className="img-fluid"
            src={require("../../assets/images/" + (type === "slider" ? slides[0] : image))}
            alt=""
          />
          {type === "video" ? (
            <a className="video-play popup-youtube" href={process.env.PUBLIC_URL + blogURL}>
              <Icofont icon="ui-play" />
            </a>
          ) : null}
        </div>

        <div className="post-info">
          <h3>
            <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{title}</Link>
          </h3>
          <h6>{published}</h6>
          <p>{excerpt}</p>
          <Link
            className="readmore dark-color"
            to={`${process.env.PUBLIC_URL + blogURL}`}
          >
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItemGrid;
