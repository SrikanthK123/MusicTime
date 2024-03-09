import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClassicalSong, HomeSliderData, TrendingSong, AllSongs } from "./Data";
import { MelodySongs } from "./Data";
import { Devotional } from "./Data";
import { PopSong } from "./Data";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="HomePage py-4">
      <Slider {...settings} className="container">
        {HomeSliderData.map((item, index) => (
          <div className="slider1" key={index}>
            <div
              className="Banner "
              style={{
                display: "flex",
                alignItems: "center",
                background: `url(${item.ImageUrl})`,
                height: "70vh",
                borderRadius: "15px",
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" mx-4">
                <h3 className="text-white">{item.Name}</h3>
                <p className=" text-center lead text-white fw-bold ">
                  {item.Desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="container">
        <h2 className="text-white my-3 py-2">All Songs</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {AllSongs.map((item, index) => (
            <div className="col d-flex justify-content-center my-2">
              <div id="SmallCard">
                <div
                  class="img"
                  id="SmallCardImg"
                  style={{
                    background: `url(${item.ImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div class="textBox">
                  <div class="textContent">
                    <p class="h1"> {item.Name} </p>
                    <span class="span">12 min ago</span>
                  </div>
                  <p class="p"> {item.MovieSong} </p>

                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-white my-3 py-2">Trending Songs</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {TrendingSong.map((item, index) => (
            <div className="col d-flex justify-content-center my-2">
              <div id="SmallCard">
                <div
                  class="img"
                  id="SmallCardImg"
                  style={{
                    background: `url(${item.ImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div class="textBox">
                  <div class="textContent">
                    <p class="h1"> {item.Name} </p>
                    <span class="span">12 min ago</span>
                  </div>
                  <p class="p"> {item.MovieSong} </p>

                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
