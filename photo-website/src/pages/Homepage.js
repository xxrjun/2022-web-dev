import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  const auth = "563492ad6f917000010000018a9f3359935a4946b784ba05c0d42fa0";
  const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const search = async () => {
    const dataFetch = await fetch(initailURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=1`;

  useEffect(() => {
    search();
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
