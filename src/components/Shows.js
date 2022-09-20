import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shows.css";

const Shows = () => {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((response) => {
        console.log(response);
        setShowData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);

  return (
    <>
      <section>
        <div className="showInput">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your favourite shows"
            className="show"
          />
        </div>
      </section>

      <section>
        <div>
          {showData.map((element) => {
            return (
              <div>
                {element.show.image ? (
                  <img
                    src={element.show.image.medium}
                    className="poster"
                    alt="pic"
                  />
                ) : (
                  <div>
                    <img
                      className="poster"
                      src="http://www.movienewz.com/img/films/poster-holder.jpg"
                      alt="images"
                    />
                  </div>
                )}

                <div>
                  <p
                    style={{ height: "100px" }}
                    dangerouslySetInnerHTML={{
                      __html: `${element.show.summary}`
                    }}
                  ></p>
                </div>

                <div className="text">
                  <h4>
                    <p>{element.show.name}</p>
                    <p>{element.show.rating.average}</p>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shows;
