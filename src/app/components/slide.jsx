'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./slide.css";

import { useContext } from "react";
import { SlideContext } from "./slidecontext";

export default function Slide() {
  const [movies, setMovies] = useState([]);
  const { setActiveSlideIndex } = useContext(SlideContext);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "aea62eb03c90189d7761191127e74ccf",
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos filmes: ", error);
      });
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <div className="mySwiper">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={-120}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {/* {index === activeSlideIndex && (
              <h2 style={{ textAlign: "center", marginTop: "10px", backgroundColor: 'red', fontSize: '32px' }}>
                {movie.title}
              </h2>
            )} */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}