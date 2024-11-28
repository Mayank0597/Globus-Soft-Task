// import React from "react";
// import whatsappLogo from "/src/assets/whatsapp.png";
// import emailLogo from "/src/assets/Group 4.png";
// import phoneLogo from "/src/assets/Vector.png";
// import facebookIcon from "/src/assets/f.png";
// import twitterIcon from "/src/assets/twitter.png";
// import instagramIcon from "/src/assets/instagram.png";
// import linkedinIcon from "/src/assets/linked_in.png";

// const TopSection = () => {
//   return (
//     <div className="bg-[#0E1135] w-full px-8  py-[21px] text-white relative">
//       <div className="flex flex-col md:flex-row justify-between items-center px-[196px]">
//         {/* Left Section */}
//         <div className="flex flex-wrap items-center space-x-4 md:mb-0">
//           <div className="flex items-center space-x-2">
//             <img
//               src={whatsappLogo}
//               alt="WhatsApp"
//               className="w-6 h-6 md:w-4 md:h-4"
//             />
//             <p className="text-sm md:text-[12px] font-medium">WhatsApp Support</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img
//               src={emailLogo}
//               alt="Email"
//               className="w-6 h-6 md:w-[10px] md:h-[8px]"
//             />
//             <p className="text-sm md:text-[12px] font-medium">
//             team@djfyapp.com
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img
//               src={phoneLogo}
//               alt="Phone"
//               className="w-6 h-6 md:w-[8px] md:h-[8px]"
//             />
//             <p className="text-sm md:text-[12px] font-medium">+001 2345 6789 90</p>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="mb-2 md:mb-0">
//           <a
//             href="#login"
//             className="text-sm md:text-[12px] font-medium hover:underline"
//           >
//             Login/Register
//           </a>
//         </div>

//         {/* Right Section */}
//         <div className="flex space-x-4 items-center">
//           <img
//             src={facebookIcon}
//             alt="Facebook"
//             className="w-6 h-6 md:w-[8px] md:h-[15px] cursor-pointer"
//           />
//           <img
//             src={twitterIcon}
//             alt="Twitter"
//             className="w-6 h-6 md:w-[14px] md:h-[11px] cursor-pointer"
//           />
//           <img
//             src={linkedinIcon}
//             alt="LinkedIn"
//             className="w-6 h-6 md:w-[14px] md:h-[14px] cursor-pointer"
//           />
//           <img
//             src={instagramIcon}
//             alt="Instagram"
//             className="w-6 h-6 md:w-[15px] md:h-[15px] cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* Yellow Line */}
//       <div className="md:w-[95%] w-[80%] h-[2px] bg-gradient-to-r from-[#D71B2C] to-[#F6B910]  mt-3 absolute top-[53px] "></div>
//     </div>
//   );
// };

// export default TopSection;

import React from "react";
import whatsappLogo from "/src/assets/whatsapp.png";
import emailLogo from "/src/assets/Group 4.png";
import phoneLogo from "/src/assets/Vector.png";
import facebookIcon from "/src/assets/f.png";
import twitterIcon from "/src/assets/twitter.png";
import instagramIcon from "/src/assets/instagram.png";
import linkedinIcon from "/src/assets/linked_in.png";

const TopSection = () => {
  return (
    <>
      <div className="bg-[#0E1135] w-full px-4 sm:px-8 lg:px-[198px] py-4 text-white relative">
        <div className="flex flex-wrap justify-between items-center gap-4 comfortaa">
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-xs font-medium">WhatsApp Support</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={emailLogo}
                alt="Email"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <p className="text-xs font-medium">team@djfyapp.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={phoneLogo}
                alt="Phone"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <p className="text-xs font-medium">
                +001 2345 6789 90
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex justify-center sm:justify-start">
            <a
              href="#login"
              className="text-xs font-medium hover:underline"
            >
              Login/Register
            </a>
          </div>

          {/* Right Section */}
          <div className="flex gap-3 sm:gap-4 items-center">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-2 h-2 sm:w-[8px] sm:h-[15px] cursor-pointer"
            />
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-2 h-2 sm:w-[14px] sm:h-[11px] cursor-pointer"
            />
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-2 h-2 sm:w-[14px] sm:h-[14px] cursor-pointer"
            />
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-2 h-2 sm:w-[14px] sm:h-[14px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Yellow Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#D71B2C] to-[#F6B910] "></div>
    </>
  );
};

export default TopSection;
