import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Actor.css";

const Actor = () => {
  const [input, setInput] = useState("");
  const [actorData, setActorData] = useState([]);

 useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.tvmaze.com/search/people?q=${input}`)
        .then((response) => {
          console.log(response);
          setActorData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
    return () => clearTimeout(getData);
  }, [input]);

  return (
    <>
      <section>
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Your favourite actor"
            className="actor"
          />
        </div>
      </section>

      <section>
        <div>
          {actorData.map((element) => {
            return (
              <div>
                {element.person.image ? (
                  <img
                    src={element.person.image.medium}
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
                  <p style={{ height: "10px" }}></p>
                </div>

                <div className="textt">
                  <h4>
                    <p>{element.person.name}</p>
                    <p>{element.person.gender}</p>
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

export default Actor;
