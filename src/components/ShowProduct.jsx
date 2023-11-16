import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { backendUrl } from "./constant";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${backendUrl}/showproduct`);
        setShow(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(show)

  return (
    <div className="container- fluid">
      <div className="row">
        {show.length > 0 ? (
          show.map((products, i) => {
            return (
              <div className="card mx-3  " style={{ width: "18rem" }}>
                <img className="card-img-top" alt="Product Image" />
                <div className="card-body">
                  <h5 className="card-title">Product Name</h5>
                  <p className="card-text">{products.productName}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Price: {products.price}</li>
                  <li className="list-group-item">Category: Electronics</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-primary">Add to Cart</button><br/><br/>
                  <Link className="btn btn-secondary">Update</Link>
                  <button className="btn btn-success">Delete</button>


                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  );
};

export default ShowProduct;
