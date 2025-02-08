import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css"; // Import CSS file for styling

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1725786485612-771a1c5cbb60?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Exclusive Deals on Gadgets",
      description: "Get the best discounts on the latest tech gadgets.",
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1725786485612-771a1c5cbb60?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fashion Trends 2024",
      description: "Upgrade your wardrobe with stylish apparel.",
    },
    {
      id: 3,
      image: "https://plus.unsplash.com/premium_photo-1725786485612-771a1c5cbb60?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Kitchen Appliances",
      description: "High-quality kitchen essentials at unbeatable prices.",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <div className="image-container">
                <img src={slide.image} alt={slide.title} className="slide-image" />
              </div>
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="shop-now">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
