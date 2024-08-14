import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import testimonialService from "../services/testimonialService";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function WhoDoIRefer() {
  const { state, setState } = useContext(AppContext);
  const handleOpen = () => {
    if (state.isLoggedin) {
      setState({ ...state, isModalOpen: true });
    } else {
      setState({ ...state, isLoginFormOpen: true });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const fetchData = async () => {
    const fetchedData = await testimonialService();
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-[#eef5ff] flex flex-col items-center mt-10 py-6 gap-0 justify-center h-min relative">
      <h2 className="text-lg md:text-2xl font-semibold">
        <span className="text-[#1A73E8]">Testimonials</span>
      </h2>

      <div className="mt-10 mb-7 relative md:w-[400px] w-[320px] mx-auto overflow-hidden shadow-lg">
        <motion.div
          className="flex"
          initial={{ x: "-100%" }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {data.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </motion.div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full"
        >
          <ArrowCircleLeftIcon color="primary" sx={{ fontSize: 40 }} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full"
        >
          <ArrowCircleRightIcon color="primary" sx={{ fontSize: 40 }} />
        </button>
      </div>

      <button
        onClick={handleOpen}
        className="bg-[#1A73E8] text-[#ddeafb] md:-translate-y-[5vh] md:text-lg rounded-lg flex items-center justify-center px-5 md:px-8 py-2 md:py-3 gap-1 mt-5 md:mt-12"
      >
        Refer Now
      </button>
    </section>
  );
}

export default WhoDoIRefer;
