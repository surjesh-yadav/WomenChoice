import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { top_api } from "../redux/actions";

export const Top = () => {
  const { products, loading } = useSelector((store) => store.tops);
  const [Topdata, setTopdata] = useState([...products]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(top_api());
    setTopdata([...products]);
  }, [dispatch]);

  const handlecat = (category) => {
    let item = products.filter((item) => {
      return item.title === category;
    });
    setTopdata([...item]);
  };

  function handlesort(e) {
    if (Topdata.length === 0) {
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
      setTopdata([...x]);
    } else {
      let x;
      if (e.target.value === "asc") {
        x = Topdata.sort(
          (a, b) => +a.price.split(",").join("") - +b.price.split(",").join("")
        );
      } else if (e.target.value === "desc") {
        x = Topdata.sort(
          (a, b) => +b.price.split(",").join("") - +a.price.split(",").join("")
        );
      }
      setTopdata([...x]);
    }
  }

  const carditem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: " 18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">Rs.{item.price}</p>
          <Link to={`/tops/${item._id}`} className="btn btn-outline-primary">
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
            <h1>Top</h1>
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
                <option value=""></option>
                <option value=""></option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {loading ? (
            <h2 className="load">loading...</h2>
          ) : Topdata.length > 0 ? (
            Topdata.map(carditem)
          ) : (
            products.map(carditem)
          )}
        </div>
      </div>
    </>
  );
};
