import React, { useState, useEffect } from "react";
import topImg from "/src/assets/Mask group (11).png";
import bottomImg from "/src/assets/Group 11.png";
import img1 from "/src/assets/Maskgroup12-ezgif.com-optiwebp.webp";
import img2 from "/src/assets/Maskgroup13-ezgif.com-optiwebp.webp";
import img3 from "/src/assets/Maskgroup14-ezgif.com-png-to-webp-converter.webp";
import filterImg1 from "/src/assets/Rectangle 67.png";
import filterImg2 from "/src/assets/Rectangle 65.png";
import filterImg3 from "/src/assets/Rectangle 66.png";
import logo from "/src/assets/“.png";

const TestimonialCarousel = () => {
  // State to track the current active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of testimonial data, each with a unique filter image
  const testimonials = [
    {
      id: 1,
      image: img1,
      filterImage: filterImg1,
      name: "Elessa Berg",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 2,
      image: img2,
      filterImage: filterImg2,
      name: "Mark jhon",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 3,
      image: img3,
      filterImage: filterImg3,
      name: "Tom Kelvis",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 4,
      image: img2,
      filterImage: filterImg2,
      name: "Mark jhon",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 5,
      image: img3,
      filterImage: filterImg3,
      name: "Tom Kelvis",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 6,
      image: img1,
      filterImage: filterImg1,
      name: "Elessa Berg",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 7,
      image: img3,
      filterImage: filterImg3,
      name: "Tom Kelvis",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 8,
      image: img1,
      filterImage: filterImg1,
      name: "Elessa Berg",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 9,
      image: img2,
      filterImage: filterImg2,
      name: "Mark jhon",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 10,
      image: img1,
      filterImage: filterImg1,
      name: "Elessa Berg",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 11,
      image: img2,
      filterImage: filterImg2,
      name: "Mark jhon",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 12,
      image: img3,
      filterImage: filterImg3,
      name: "Tom Kelvis",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 13,
      image: img3,
      filterImage: filterImg3,
      name: "Tom Kelvis",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 14,
      image: img1,
      filterImage: filterImg1,
      name: "Elessa Berg",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
    {
      id: 15,
      image: img2,
      filterImage: filterImg2,
      name: "Mark jhon",
      text: "I am very happy the way you present your daily info. And also it helps me save time to pick right stock with success.",
    },
  ];

  // Calculate the total number of slides
  const totalSlides = Math.ceil(testimonials.length / 3);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalSlides]);

  return (
    <div className="bg-[#09173C] text-white min-h-screen flex flex-col items-center pt-[71px] pb-[50px]">
      {/* Center Logo */}
      <img src={topImg} alt="Logo" className="w-[54px] h-[54px] mb-[27px]" />

      {/* Heading */}
      <h1 className="text-[32px] mb-[10px]">
        Client <span className="text-[#ED3E31]"> Testimonials</span>
      </h1>

      {/* Below Logo */}
      <img src={bottomImg} alt="Logo" className="w-[49px] h-[21px] mb-[18px]" />

      {/* Lorem Text */}
      <p className="text-center text-base text-[#FFFFFF] mb-[22px] max-w-[785px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>

      {/* Carousel Section */}
      <div className="relative w-full max-w-5xl overflow-hidden mb-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full max-w-[33.33%] px-3 flex-shrink-0 text-center"
            >
              <div className="relative group">
                {/* Filter Image */}
                <img
                  src={testimonial.filterImage}
                  alt="Filter"
                  className="absolute inset-0 w-[332px] h-[279px] object-cover opacity-50 rounded-lg"
                />
                {/* Main Image */}
                <img
                  src={testimonial.image}
                  alt="Client"
                  className="w-[332px] h-[279px] object-cover rounded-lg"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <img src={logo} alt="Logo" className="w-6 h-[29px] mb-4" />
                  <p className="text-white text-center text-sm mb-2 px-[21px]">
                    {testimonial.text}
                  </p>
                  <span className="text-[#FFFFFF]">{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Section */}
      <div className="flex gap-[10px]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
              activeSlide === index ? "bg-[#FDDF09]" : "bg-[#D9D9D9]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
