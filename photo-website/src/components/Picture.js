import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt={data.alt} />
        <p>
          Download Image:{" "}
          <a target="_blank" href={data.src.large}>
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Picture;
