import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite={true}
      responsive={responsive}
      itemClass="item"
    >
      {/* Client review */}
      <ClientReview
        image="/images/image2.png"
        name="Erona Meckaj"
        role="Frontend Developer"
      />
      <ClientReview
        image="/images/image7.jpg"
        name="Kleida Dogjani"
        role="Project Manager"
      />
      <ClientReview
        image="/images/image6.jpg"
        name="Denisa Sefa"
        role="Fullstack Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
