import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="px-16 pt-5 bg-white rounded-lg shadow-md md:w-[400px] md:h-[400px] h-[330px] w-[320px] flex-shrink-0">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="rounded-full w-16 h-16 mx-auto mb-4 md:mt-9"
      />
      <h3 className="md:text-xl text-lg font-bold text-center md:mt-5 mt-3">
        {testimonial.name}
      </h3>
      <p className="text-gray-600 text-center md:text-base text-sm md:mt-4 mt-3">
        {testimonial.testimonial}
      </p>
      <p className="text-[#1A73E8] text-center font-bold md:mt-5 mt-5">
        Rating: {testimonial.rating}
      </p>
    </div>
  );
};

export default TestimonialCard;
