import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Prodects = ({setId}) => {
    const [cricketData, setCricketData] = useState([]);
    const [deleteData, setDeleteData] = useState([])
    const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://65d6111ef6967ba8e3bd6ba9.mockapi.io/api/cricket")
      .then((res) => setCricketData(res.data))
      .catch((err) => {
        console.log(err);
      });
    };
    
    const handleEdit = (id) => {
        setId(id);
        navigate(`/edit/${id}`)
    }

    const handleDelete = async(id) => {
        await axios.delete(`https://65d6111ef6967ba8e3bd6ba9.mockapi.io/api/cricket/${id}`)
            .then(res => setDeleteData(res.data))
            .catch((err) => { console.log(err) })
    }
  return (
    <div>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Bat_Id</th>
            <th scope="col">Bat_Name</th>
            <th scope="col">Bat_Price</th>
            <th scope="col">Bat_Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {cricketData.map((item, index) => {
          return (
            <>
              <tbody>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.bat_id}</td>
                  <td>{item.bat_name}</td>
                  <td>{item.bat_price}</td>
                  <td>{item.bat_description}</td>
                  <td>
                    <button
                      className="bg-warning"
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="bg-danger"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      <button className='upt-sty-blue'
        onClick={() => {
          navigate("/create");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Prodects;
