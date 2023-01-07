import React from "react";
import { useNavigate } from "react-router-dom";
import { Top } from "./Top";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="carousal">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              onClick={() => {
                navigate("/jeans");
              }}
              src="/homeimg\banner 2.jpg"
              class="d-block w-100"
              alt=""
              height="560px"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => {
                navigate("/kurtis");
              }}
              src="/homeimg\banner 5.webp"
              class="d-block w-100"
              alt=""
              height="560px"
            />
          </div>
          <div class="carousel-item">
            <img
              onClick={() => {
                navigate("/tops");
              }}
              src="/homeimg\banner 3.png"
              class="d-block w-100"
              alt=""
              height="560px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="center">Products</h1>
      <div
        className="cont2"
        style={{ width: "90%", height: "500px", margin: "auto" }}
      >
        <div className="cont2in">
          <img
            onClick={() => {
              navigate("/jeans");
            }}
            height="90%"
            width="100%"
            src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069720/WomenChoice-Images/jeans/m-sfjean0072-sassafras-original-imafyts2zrqfzkcp-bb_dmg72w.webp"
            alt=""
          />
          <h3>Jeans</h3>
        </div>
        <div className="cont2in">
          <img
            onClick={() => {
              navigate("/tops");
            }}
            height="90%"
            width="100%"
            src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069770/WomenChoice-Images/Top/xs-tr-19-brijam-original-imageg7hfcegdujb_gpzqpz.webp"
            alt=""
          />
          <h3>Tops</h3>
        </div>
        <div className="cont2in">
          <img
            onClick={() => {
              navigate("/kurtis");
            }}
            height="90%"
            width="100%"
            src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673069767/WomenChoice-Images/kurtiss_nbppce.webp"
            alt=""
          />
          <h3>Kurtis</h3>
        </div>
      </div>
      <div className="images">
        <img
          onClick={() => {
            navigate("/jeans");
          }}
          width="100%"
          src="/homeimg/img1-unsplash.avif"
          alt=""
        />
      </div>
      <h1 className="center">Trending</h1>

      <div className="container2">
        <div className="container2in">
          <img
            height="100%"
            width="100%"
            src="/homeimg/img2-unsplash.avif"
            alt=""
          />
        </div>
        <div className="container2in">
          <img
            height="100%"
            width="100%"
            src="/homeimg/img3-unsplash.avif"
            alt=""
          />
        </div>
      </div>
      <Top/>
    </div>
  );
}

export default Home;
