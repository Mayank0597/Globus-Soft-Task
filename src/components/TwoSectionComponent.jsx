// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons
// import topBackgroundImage from "/src/assets/Group2061-ezgif.com-optiwebp.webp";
// import centerImage from "/src/assets/Group 2020.png";
// import img1 from "/src/assets/Maskgroup18-ezgif.com-png-to-webp-converter.webp";
// import img2 from "/src/assets/Maskgroup19-ezgif.com-png-to-webp-converter.webp";
// import img3 from "/src/assets/Maskgroup20-ezgif.com-png-to-webp-converter.webp";

// const TwoSectionComponent = () => {
//   // const topBackgroundImage = "path/to/top-background-image.jpg";
//   // const centerImage = "path/to/center-image.jpg";
//   const carouselImages = [img1, img2, img3, img2, img1, img3]; // Replace with your carousel images

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//   };

//   return (
//     <div className="w-full">
//       {/* Top Section */}
//       <div
//         className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center"
//         style={{ backgroundImage: `url(${topBackgroundImage})` }}
//       >
//         {/* Centered Image */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <img
//             src={centerImage}
//             alt="Center"
//             className="w-[150px] md:w-[250px] lg:w-[300px] rounded-full"
//           />
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="relative -mt-[50px] flex justify-center items-center">
//         <div className="flex gap-4 items-center">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
//           >
//             <FaArrowLeft className="text-gray-600 text-xl" />
//           </button>

//           {/* Carousel */}
//           <div className="flex gap-4 overflow-hidden">
//             {carouselImages
//               .slice(currentIndex, currentIndex + 3)
//               .concat(
//                 carouselImages.slice(
//                   0,
//                   Math.max(0, currentIndex + 3 - carouselImages.length)
//                 )
//               )
//               .map((image, index) => (
//                 <div
//                   key={index}
//                   className="w-[100px] md:w-[150px] lg:w-[200px] h-[100px] md:h-[150px] lg:h-[200px] bg-cover bg-center rounded-lg shadow-md"
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//               ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
//           >
//             <FaArrowRight className="text-gray-600 text-xl" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="w-full h-[50vh] md:h-[40vh] bg-blue-500"></div>
//     </div>
//   );
// };

// export default TwoSectionComponent;

// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons
// import topBackgroundImage from "/src/assets/Group2061-ezgif.com-optiwebp.webp";
// import centerImage from "/src/assets/Group 2020.png";
// import img1 from "/src/assets/Maskgroup18-ezgif.com-png-to-webp-converter.webp";
// import img2 from "/src/assets/Maskgroup19-ezgif.com-png-to-webp-converter.webp";
// import img3 from "/src/assets/Maskgroup20-ezgif.com-png-to-webp-converter.webp";

// const TwoSectionComponent = () => {
//   const carouselImages = [img1, img2, img3, img2, img1, img3]; // Replace with your carousel images

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//   };

//   return (
//     <div className="w-full relative">
//       {/* Top Section */}
//       <div
//         className="w-full h-[50vh] md:h-[690px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${topBackgroundImage})` }}
//       >
//         {/* Centered Image */}
//         <div className="absolute inset-0 flex justify-center top-[142px]">
//           <img
//             src={centerImage}
//             alt="Center"
//             className="w-[150px] md:w-[250px] lg:w-[983px] h-[291px]"
//           />
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="absolute w-full top-1/2 -translate-y-[50%] flex justify-center items-center">
//         <div className="flex gap-4 items-center">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="p-2"
//           >
//             <FaArrowLeft className="text-[#FFFFFF] text-2xl" />
//           </button>

//           {/* Carousel */}
//           <div className="flex gap-4 overflow-hidden">
//             {carouselImages
//               .slice(currentIndex, currentIndex + 3)
//               .concat(
//                 carouselImages.slice(
//                   0,
//                   Math.max(0, currentIndex + 3 - carouselImages.length)
//                 )
//               )
//               .map((image, index) => (
//                 <div
//                   key={index}
//                   className="w-[100px] md:w-[150px] lg:w-[330px] h-[100px] md:h-[150px] lg:h-[290px] bg-cover bg-center rounded-lg shadow-md"
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//               ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="p-2"
//           >
//             <FaArrowRight className="text-[#FFFFFF] text-2xl" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="w-full min-h-screen bg-[#07091F]"></div>
//     </div>
//   );
// };

// export default TwoSectionComponent;

// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons
// import topBackgroundImage from "/src/assets/Group2061-ezgif.com-optiwebp.webp";
// import centerImage from "/src/assets/Group 2020.png";
// import img1 from "/src/assets/Maskgroup18-ezgif.com-png-to-webp-converter.webp";
// import img2 from "/src/assets/Maskgroup19-ezgif.com-png-to-webp-converter.webp";
// import img3 from "/src/assets/Maskgroup20-ezgif.com-png-to-webp-converter.webp";
// import logo from "/src/assets/Mask group (22).png";
// import filterImage from "/src/assets/Rectangle 31.png"; // Replace with your filter image path
// import bottomImg1 from "/src/assets/85b872e82-ezgif.com-png-to-webp-converter.webp";
// import bottomImg2 from "/src/assets/85b872e821-ezgif.com-optiwebp.webp";
// import bottomImg3 from "/src/assets/85b872e83-ezgif.com-png-to-webp-converter.webp";
// // import bottomImg4 from "/src/assets/85b872e82-ezgif.com-png-to-webp-converter.webp";
// // import bottomImg5 from "/src/assets/bottomImg5.png";

// const TwoSectionComponent = () => {
//   // Top Carousel Images
//   const carouselImages = [img1, img2, img3, img2, img1, img3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + carouselImages.length) % carouselImages.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//   };

//   // Bottom Carousel Images
//   const bottomCarouselImages = [bottomImg1, bottomImg2, bottomImg3];
//   const [bottomIndex, setBottomIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBottomIndex(
//         (prevIndex) => (prevIndex + 1) % bottomCarouselImages.length
//       );
//     }, 3000); // Auto-slide every 3 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [bottomCarouselImages.length]);

//   return (
//     <div className="w-full relative">
//       {/* Top Section */}
//       <div
//         className="w-full h-[50vh] md:h-[690px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${topBackgroundImage})` }}
//       >
//         {/* Centered Image */}
//         <div className="absolute inset-0 flex justify-center top-[142px]">
//           <img
//             src={centerImage}
//             alt="Center"
//             className="w-[150px] md:w-[250px] lg:w-[983px] h-[291px]"
//           />
//         </div>
//       </div>

//       {/* Top Carousel Section */}
//       <div className="absolute w-full -translate-y-[50%] flex justify-center items-center">
//         <div className="flex gap-4 items-center">
//           {/* Left Arrow */}
//           <button onClick={handlePrev} className="p-2">
//             <FaArrowLeft className="text-[#FFFFFF] text-2xl" />
//           </button>

//           {/* Carousel */}
//           <div className="flex gap-4 overflow-hidden">
//             {carouselImages
//               .slice(currentIndex, currentIndex + 3)
//               .concat(
//                 carouselImages.slice(
//                   0,
//                   Math.max(0, currentIndex + 3 - carouselImages.length)
//                 )
//               )
//               .map((image, index) => (
//                 <div
//                   key={index}
//                   className="w-[100px] md:w-[150px] lg:w-[330px] h-[100px] md:h-[150px] lg:h-[290px] bg-cover bg-center rounded-lg shadow-md"
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//               ))}
//           </div>

//           {/* Right Arrow */}
//           <button onClick={handleNext} className="p-2">
//             <FaArrowRight className="text-[#FFFFFF] text-2xl" />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="w-full min-h-screen bg-[#07091F] text-white flex flex-col items-center pt-[120px]">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-[100px] md:w-[20pxpx] h-[30px] mt-10"
//         />

//         {/* Heading */}
//         <h2 className="text-2xl md:text-[32px] font-medium ">
//         Web apps
//         </h2>

//         {/* Bottom Carousel */}
//         <div className="relative mt-10 w-full max-w-[90%] lg:max-w-[70%] flex justify-center items-center">
//           {/* Left Filter */}
//           <div className="absolute left-0 w-[15%] h-full flex items-center">
//             <img
//               src={filterImage}
//               alt="Left Filter"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right Filter */}
//           <div className="absolute right-0 w-[15%] h-full flex items-center">
//             <img
//               src={filterImage}
//               alt="Right Filter"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Bottom Carousel Images */}
//           <div className="flex gap-4 overflow-hidden">
//             {bottomCarouselImages.map((image, index) => {
//               const isCenter = index === bottomIndex;

//               return (
//                 <div
//                   key={index}
//                   className={`flex-shrink-0 w-[80px] md:w-[150px] lg:w-[350px] h-[80px] md:h-[150px] lg:h-[650px] bg-cover  rounded-lg transition-transform duration-300 ${
//                     isCenter ? "scale-110 z-10" : "scale-90 opacity-50"
//                   }`}
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex mt-6 gap-2">
//           {bottomCarouselImages.map((_, index) => (
//             <span
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === bottomIndex ? "bg-yellow-500" : "bg-gray-400"
//               }`}
//             ></span>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-8">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
//             Sign Up as User
//           </button>
//           <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
//             Sign Up as DJ
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoSectionComponent;

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons
import topBackgroundImage from "/src/assets/Group2061-ezgif.com-optiwebp.webp";
import centerImage from "/src/assets/Group 2020.png";
import img1 from "/src/assets/Maskgroup18-ezgif.com-png-to-webp-converter.webp";
import img2 from "/src/assets/Maskgroup19-ezgif.com-png-to-webp-converter.webp";
import img3 from "/src/assets/Maskgroup20-ezgif.com-png-to-webp-converter.webp";
import logo from "/src/assets/Mask group (22).png";
import filterImage from "/src/assets/Rectangle 31.png"; // Replace with your filter image path
import bottomImg1 from "/src/assets/85b872e82-ezgif.com-png-to-webp-converter.webp";
import bottomImg2 from "/src/assets/85b872e821-ezgif.com-optiwebp.webp";
import bottomImg3 from "/src/assets/85b872e83-ezgif.com-png-to-webp-converter.webp";
import group from "/src/assets/Group 11.png";

const TwoSectionComponent = () => {
  // Top Carousel Images
  const carouselImages = [img1, img2, img3, img2, img1, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Bottom Carousel Images
  const bottomCarouselImages = [bottomImg1, bottomImg2, bottomImg3];
  const [bottomIndex, setBottomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBottomIndex(
        (prevIndex) => (prevIndex + 1) % bottomCarouselImages.length
      );
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [bottomCarouselImages.length]);

  return (
    <div className="w-full relative">
      {/* Top Section */}
      <div
        className="w-full h-[50vh] md:h-[690px] bg-cover bg-center"
        style={{ backgroundImage: `url(${topBackgroundImage})` }}
      >
        {/* Centered Image */}
        <div className="absolute inset-0 flex justify-center top-[10%] sm:top-[100px] md:top-[125px]">
          <img
            src={centerImage}
            alt="Center"
            className="w-[60%] md:w-[60%] lg:w-[983px] lg:h-[291px] h-[150px]"
          />
        </div>
      </div>

      {/* Top Carousel Section */}
      <div className="absolute w-full -translate-y-[50%] flex justify-center items-center">
        <div className="flex md:gap-4 gap-1 items-center">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="md:p-2">
            <FaArrowLeft className="text-white text-lg sm:text-2xl" />
          </button>

          {/* Carousel */}
          <div className="flex gap-4 overflow-hidden">
            {carouselImages
              .slice(currentIndex, currentIndex + 3)
              .concat(
                carouselImages.slice(
                  0,
                  Math.max(0, currentIndex + 3 - carouselImages.length)
                )
              )
              .map((image, index) => (
                <div
                  key={index}
                  className="w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[330px] h-[80px] sm:h-[100px] md:h-[150px] lg:h-[200px] xl:h-[290px] bg-cover bg-center rounded-lg shadow-md"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className="md:p-2">
            <FaArrowRight className="text-white text-lg sm:text-2xl" />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full min-h-full bg-[#07091F] text-white flex flex-col items-center pt-[120px]  sm:pt-[264px]  px-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[40px] sm:w-[53px] md:w-[53px] h-auto"
        />

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-medium text-center mt-[19px] mb-[9px]">
          WEB <span className="text-[#DB1E2D]">APPS</span>
        </h2>
        <img src={group} alt="Logo" className="w-[49px] h-[21px] mb-[20px]" />

        <p className="text-center text-base text-[#FFFFFF] mb-[27px]">
          Scan the QR Code, Connect to the event and request your song . No need
          to Download or install any App.
        </p>

        {/* Bottom Carousel */}
        <div className="relative mt-10 w-full max-w-[90%] lg:max-w-[70%] flex justify-center items-center">
          {/* Left Filter */}
          <div className="absolute left-0 w-[10%] sm:w-[15%] h-full flex items-center">
            <img
              src={filterImage}
              alt="Left Filter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Filter */}
          <div className="absolute right-0 w-[10%] sm:w-[15%] h-full flex items-center">
            <img
              src={filterImage}
              alt="Right Filter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Carousel Images */}
          <div className="flex gap-2 sm:gap-4 overflow-hidden">
            {bottomCarouselImages.map((image, index) => {
              const isCenter = index === bottomIndex;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[280px] h-[150px] sm:h-[230px] md:h-[320px] lg:h-[450px] xl:h-[700px] bg-cover bg-center rounded-lg transition-transform duration-300 ${
                    isCenter ? " z-10" : "scale-90 opacity-50"
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex mt-6 gap-2">
          {bottomCarouselImages.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === bottomIndex ? "bg-yellow-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white px-4 py-2 text-sm sm:text-base md:px-6 md:py-2 rounded-md">
            Sign Up as User
          </button>
          <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white px-4 py-2 text-sm sm:text-base md:px-6 md:py-2 rounded-md">
            Sign Up as DJ
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoSectionComponent;
