import React from "react";
import { useState, useEffect } from "react";
import { backendUrl } from "./constant";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState({
    productName: "",
    price: "",
    description: "",
  });

  const [error, setError] = useState({
    productNameErr: "",
    priceErr: "",
    descriptionErr: "",
  });

  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const submitData = async (e) => {
    e.preventDefault();

    const pushErr = {};
    if (data.productName.trim() == "" || data.productName.trim() == null) {
      pushErr.productNameErr = "name is required";
    }

    if (data.price.trim() == "" || data.price.trim() == null) {
      pushErr.priceErr = "price is required";
    }
    if(data.price.trim()<0){
      pushErr.priceErr="Price should 0 or more"
    }
    if (data.description.trim() == "" || data.description.trim() == null) {
      pushErr.descriptionErr = "description is required";
    }
    if (Object.keys(pushErr).length > 0) {
      setError(pushErr);
    } else {
      try {
        const res = await axios.post(`${backendUrl}/addProduct`, data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="cont">
      <div className="container-fluid form">
        <form action="" onSubmit={submitData} encType="multipart/form-data">
          <h2 className="text-center">Add Product</h2>
          <div className="mt-3">
            <input
              type="text"
              id=""
              placeholder="Product Name"
              className="inps"
              name="productName"
              onChange={handleData}
            />
            <small style={{ color: "white" }}>{error.productNameErr}</small>
          </div>

          <div className="mt-3">
            <input
              type="text"
              id=""
              placeholder="Price"
              className="inps"
              name="price"
              onChange={handleData}
            />
            <small style={{ color: "white" }}>{error.priceErr}</small>
          </div>

          <div className=" mt-3">
            <label for="avatar">Description</label>
            <br />
            <textarea
              placeholder="Product Description"
              name="description"
              onChange={handleData}
            ></textarea>
            <small style={{ color: "white" }}>{error.descriptionErr}</small>
          </div>

          <div>
          Product Image:
          <input type="url" name="image"/>
          </div>

          <div className="form-checkmt-3">
            <label className="form-check-label">
              <br />
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />{" "}
              Remember Product
            </label>
          </div>

          <div className="mt-4 buts">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
          <div className="mt-3">
            <span>
              Register <a href="">Product</a>
            </span>{" "}
            Or{" "}
            <span>
              Login As <a href="">User</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
