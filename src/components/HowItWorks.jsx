// import React from "react";
// import {
//   FaTools,
//   FaRegLightbulb,
//   FaHandshake,
//   FaRocket,
//   FaChartLine,
// } from "react-icons/fa";

// const HowItWorks = () => {
//   return (
//     <div className="bg-[#07091F] pt-[50px] pb-[91px] px-4">
//       {/* Heading */}
//       <h2 className="text-white text-center text-[32px] font-medium mb-4">
//         HERE'S HOW <span className="text-[#ED3E31]">DJFY WORKS</span>
//       </h2>
//       {/* Underline with dots */}
//       <div className="flex justify-center mb-[61px]">
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//         <div className="w-1 h-1 bg-[#ED3E31] rounded-full"></div>
//       </div>
//       {/* Cards */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {/* First Row */}
//         <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
//             <FaTools />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Free Account Creation</h3>
//           <p className="text-gray-600 max-w-[318px] text-justify">
//             DJs, live musicians/bands, and venue owners can sign up for a free
//             account on DJFY, gaining instant access to a world of new
//             opportunities.
//           </p>
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
//             <FaRegLightbulb />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">QR Code Sharing</h3>
//           <p className="text-gray-600 max-w-[318px] text-justify">
//             Upon registration, users receive a personalized QR code that they
//             can share with their audience. This QR code acts as a gateway for
//             guests to submit song requests and interact with the performance in
//             real-time.
//           </p>
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
//             <FaHandshake />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">
//             Flexible Monetization Options
//           </h3>
//           <p className="text-gray-600 max-w-[336px] text-justify">
//             Musicians have full control over their earnings with DJFY. They can
//             set a minimum bidding amount for each song request or offer free
//             requests to their audience. Additionally, guests have the option to
//             tip the performers, further enhancing the artist's revenue
//             potential.
//           </p>
//         </div>
//         {/* Second Row */}
//         <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
//             <FaRocket />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">Customizable Playlist:</h3>
//           <p className="text-gray-600 max-w-[332px] text-justify">
//             Artists can curate their playlist on DJFY, giving guests the freedom
//             to choose which songs they want to hear during the performance. This
//             interactive feature enhances audience engagement and ensures a
//             memorable experience for everyone involved.
//           </p>
//         </div>
//         <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
//             <FaChartLine />
//           </div>
//           <h3 className="text-lg font-semibold mb-2">
//             Song Request Management:
//           </h3>
//           <p className="text-gray-600 max-w-[334px] text-justify">
//             DJs and musicians have the final say on song requests. They can
//             accept or reject requests based on their preferences and the overall
//             vibe of the event. For paid requests, guests will only be charged if
//             the DJ accepts the request and plays the song within 30 minutes,
//             ensuring a fair and efficient process.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

// import React from "react";
// import {
//   FaTools,
//   FaRegLightbulb,
//   FaHandshake,
//   FaRocket,
//   FaChartLine,
// } from "react-icons/fa";

// const HowItWorks = () => {
//   return (
//     <div className="bg-[#07091F] pt-[50px] pb-[91px] px-4">
//       {/* Heading */}
//       <h2 className="text-white text-center text-[32px] font-medium mb-4">
//         HERE'S HOW <span className="text-[#ED3E31]">DJFY WORKS</span>
//       </h2>
//       {/* Underline with dots */}
//       <div className="flex justify-center mb-[61px]">
//         {[...Array(12)].map((_, index) => (
//           <div
//             key={index}
//             className="w-1 h-1 bg-[#ED3E31] rounded-full"
//           ></div>
//         ))}
//       </div>
//       {/* Cards */}
//       <div className="flex flex-wrap justify-center gap-6">
//         {/* Card */}
//         <div className="relative bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           {/* Circular Image */}
//           <div className="absolute -top-10 left-2 w-20 h-20 bg-[#E0F2FE] rounded-full flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/56"
//                 alt="Icon"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           {/* Card Content */}
//           <h3 className="text-lg font-semibold mb-2 mt-10">
//             Free Account Creation
//           </h3>
//           <p className="text-gray-600 max-w-[318px] text-justify">
//             DJs, live musicians/bands, and venue owners can sign up for a free
//             account on DJFY, gaining instant access to a world of new
//             opportunities.
//           </p>
//         </div>

//         {/* Additional Cards */}
//         <div className="relative bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E0F2FE] rounded-full flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/56"
//                 alt="Icon"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold mb-2 mt-10">QR Code Sharing</h3>
//           <p className="text-gray-600 max-w-[318px] text-justify">
//             Upon registration, users receive a personalized QR code that they
//             can share with their audience. This QR code acts as a gateway for
//             guests to submit song requests and interact with the performance in
//             real-time.
//           </p>
//         </div>

//         <div className="relative bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E0F2FE] rounded-full flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/56"
//                 alt="Icon"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold mb-2 mt-10">
//             Flexible Monetization Options
//           </h3>
//           <p className="text-gray-600 max-w-[336px] text-justify">
//             Musicians have full control over their earnings with DJFY. They can
//             set a minimum bidding amount for each song request or offer free
//             requests to their audience. Additionally, guests have the option to
//             tip the performers, further enhancing the artist's revenue
//             potential.
//           </p>
//         </div>

//         <div className="relative bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E0F2FE] rounded-full flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/56"
//                 alt="Icon"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold mb-2 mt-10">
//             Customizable Playlist
//           </h3>
//           <p className="text-gray-600 max-w-[332px] text-justify">
//             Artists can curate their playlist on DJFY, giving guests the freedom
//             to choose which songs they want to hear during the performance. This
//             interactive feature enhances audience engagement and ensures a
//             memorable experience for everyone involved.
//           </p>
//         </div>

//         <div className="relative bg-white shadow-lg p-6 rounded-lg w-full sm:w-[374px] h-[314px]">
//           <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#E0F2FE] rounded-full flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full overflow-hidden">
//               <img
//                 src="https://via.placeholder.com/56"
//                 alt="Icon"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//           <h3 className="text-lg font-semibold mb-2 mt-10">
//             Song Request Management
//           </h3>
//           <p className="text-gray-600 max-w-[334px] text-justify">
//             DJs and musicians have the final say on song requests. They can
//             accept or reject requests based on their preferences and the overall
//             vibe of the event. For paid requests, guests will only be charged if
//             the DJ accepts the request and plays the song within 30 minutes,
//             ensuring a fair and efficient process.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;

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
            <h3 className="text-lg font-semibold mb-2 text-[#FFFFFF]">{item.title}</h3>
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
