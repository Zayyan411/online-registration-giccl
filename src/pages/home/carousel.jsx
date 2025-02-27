import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { MapData } from "./map-data";

const CarouselSlider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={true}
      indicators={true}
    >
      {MapData.map((slide, idx) => (
        <Carousel.Item key={idx} style={{ height: "750px" }}>
          <img
            className="d-block w-100 h-100 object-fit-cover full-slide"
            src={slide.src}
            alt={slide.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { CarouselSlider };
