import React from "react";
import {
  FaTools,
  FaRegLightbulb,
  FaHandshake,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import circle from "/src/assets/Ellipse 66.png";
import logo1 from "/src/assets/Group 2062.png";
import logo2 from "/src/assets/Group 2064.png";
import logo3 from "/src/assets/Group 2065.png";
import logo4 from "/src/assets/Group 2066.png";
import logo5 from "/src/assets/Group 2063.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#07091F] pt-[50px] pb-[91px] px-4">
      {/* Heading */}
      <h2 className="text-white text-center text-[32px] font-medium mb-4">
        HERE'S HOW <span className="text-[#ED3E31]">DJFY WORKS</span>
      </h2>
      {/* Underline with dots */}
      <div className="flex justify-center mb-[61px]">
        <div className="flex">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 bg-[#ED3E31] rounded-full"
            ></div>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 gap-y-[65px]">
        {/* Card Items */}
        {[
          {
            icon: <FaTools />,
            title: "Free Account Creation",
            description:
              "DJs, live musicians/bands, and venue owners can sign up for a free account on DJFY, gaining instant access to a world of new opportunities.",
            imgSrc: circle,
            innerImgSrc: logo1,
          },
          {
            icon: <FaRegLightbulb />,
            title: "QR Code Sharing",
            description:
              "Upon registration, users receive a personalized QR code that they can share with their audience. This QR code acts as a gateway for guests to submit song requests and interact with the performance in real-time.",
            imgSrc: circle,
            innerImgSrc: logo2,
          },
          {
            icon: <FaHandshake />,
            title: "Flexible Monetization Options",
            description:
              "Musicians have full control over their earnings with DJFY. They can set a minimum bidding amount for each song request or offer free requests to their audience. Additionally, guests have the option to tip the performers, further enhancing the artist's revenue potential.",
            imgSrc: circle,
            innerImgSrc: logo3,
          },
          {
            icon: <FaRocket />,
            title: "Customizable Playlist",
            description:
              "Artists can curate their playlist on DJFY, giving guests the freedom to choose which songs they want to hear during the performance. This interactive feature enhances audience engagement and ensures a memorable experience for everyone involved.",
            imgSrc: circle,
            innerImgSrc: logo4,
          },
          {
            icon: <FaChartLine />,
            title: "Song Request Management",
            description:
              "DJs and musicians have the final say on song requests. They can accept or reject requests based on their preferences and the overall vibe of the event. For paid requests, guests will only be charged if the DJ accepts the request and plays the song within 30 minutes, ensuring a fair and efficient process.",
            imgSrc: circle,
            innerImgSrc: logo5,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1B3782] to-[#09173C] shadow-lg px-[28px] pt-[52px] rounded-3xl w-full sm:w-[374px] sm:h-[314px] relative"
          >
            {/* Circular Image */}
            <img
              src={item.imgSrc}
              alt="Circular"
              className="absolute -top-10 left-1 w-[77px] h-[77px] rounded-full"
            />
            <img
              src={item.innerImgSrc}
              alt="Inner"
              className="absolute -top-[22px] left-5 w-[43px] h-[43px]  "
            />
            {/* Icon */}
            {/* <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
              {item.icon}
            </div> */}
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-[#FFFFFF]">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-[#FFFFFF] lg:max-w-[318px] text-justify">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
