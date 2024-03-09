import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [cricketData, setCricketData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://65d6111ef6967ba8e3bd6ba9.mockapi.io/api/cricket")
      .then((res) => setCricketData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
              {cricketData.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="col split-card">
                          <div className="card bg-primary-subtle">
                            <img
                              src={item.bat_image}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">
                                Id :&nbsp; {item.bat_id}
                              </h5>
                              <h5 className="card-title">
                                Name :&nbsp; {item.bat_name}
                              </h5>
                              <h5 className="card-title">
                                Price :&nbsp; {item.bat_price}
                              </h5>
                              <p className="card-text">
                                <b> Description :</b>&nbsp;{" "}
                                {item.bat_description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
              })}
      </div>
    </div>
  );
};

export default Home;
