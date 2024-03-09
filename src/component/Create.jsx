import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    bat_id: "",
    bat_name: "",
    bat_price: "",
    bat_description: "",
  });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditData((perData) => ({
        ...perData,
        [name]: value,
      }));
    };

    const hanldeFormSubmit = async (e) => {
      e.preventDefault();
      await axios
        .post(`https://65d6111ef6967ba8e3bd6ba9.mockapi.io/api/cricket`, editData)
        .catch((err) => console.log(err));
      navigate("/products");
    };

    return (
      <div>
        <form className="style-form" onSubmit={hanldeFormSubmit}>
          <label className="lable-sty">
            Bat_Id : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='input-sty'
              type="text"
              name="bat_id"
              value={editData.bat_id}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="lable-sty">
            Bat_Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='input-sty'
              type="text"
              name="bat_name"
              value={editData.bat_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="lable-sty">
            Bat_Price : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='input-sty'
              type="text"
              name="bat_price"
              value={editData.bat_price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="lable-sty">
            Bat_Description :
            <input className='input-sty'
              type="text"
              name="bat_description"
              value={editData.bat_description}
              onChange={handleChange}
            />
          </label>
          <button className="upt-sty-blue" type="submit">
            Create
          </button>
        </form>
      </div>
    );
};

export default Create;
