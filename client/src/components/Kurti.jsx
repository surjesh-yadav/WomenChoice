import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { kurti_api } from "../redux/actions";
import { loading } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Kurti = () => {
  const { products, loading } = useSelector((store) => store.kurtis);
  const [Kurtidata, setKurtidata] = useState([...products]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kurti_api());
    setKurtidata([...products]);
  }, [dispatch]);

  const handlecat = (category) => {
    let item = products.filter((item) => {
      return item.title === category;
    });
    setKurtidata([...item]);
  };

  function handlesort(e) {
    if (Kurtidata.length == 0) {
      let x;
      if (e.target.value === "asc") {
        x = products.sort(
          (a, b) => +a.price.split(",").join("") - +b.price.split(",").join("")
        );
      } else if (e.target.value === "desc") {
        x = products.sort(
          (a, b) => +b.price.split(",").join("") - +a.price.split(",").join("")
        );
      }
      setKurtidata([...x]);
    } else {
      let x;
      if (e.target.value === "asc") {
        x = Kurtidata.sort(
          (a, b) => +a.price.split(",").join("") - +b.price.split(",").join("")
        );
      } else if (e.target.value === "desc") {
        x = Kurtidata.sort(
          (a, b) => +b.price.split(",").join("") - +a.price.split(",").join("")
        );
      }
      setKurtidata([...x]);
    }
  }

  const carditem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: " 18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">Rs.{item.price}</p>
          <Link to={`/kurtis/${item._id}`} className="btn btn-outline-primary">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Kurti</h1>
            <hr />
            <div className="sortbtn">
              <select name="" id="" onChange={handlesort}>
                <option value="">Sort by price</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
              {/* <select
                onChange={(e) => {
                  handlecat(e.target.value);
                }}
              >
                <option value="">Filter by title</option>
                <option value="all">All</option>
                <option value="Kurti">Kurti</option>
                <option value="Kurti">Kurti</option>
                <option value="Kurti">Kurti</option>
                <option value="Kurti">Kurti</option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {loading ? (
            <h2 className="load">loading...</h2>
          ) : Kurtidata.length > 0 ? (
            Kurtidata.map(carditem)
          ) : (
            products.map(carditem)
          )
          // products.map(carditem)
          }
        </div>
      </div>
    </>
  );
};

export default Kurti;
