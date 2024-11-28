// import React from "react";
// import logo from "/src/assets/Djfi-logo-main copy 2.png";
// import whatsappIcon from "/src/assets/WhatsApp 1.png";
// import emailIcon from "/src/assets/Mask group (15).png";
// import robotIcon from "/src/assets/Group 2143.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#07091F] text-white py-8 pl-[146px] pr-[246px]">
//       {/* Top Horizontal Line */}
//       <hr className="border-t border-[#fa942e] mb-16" />

//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left Section */}
//         <div>
//           {/* Company Logo and Name */}
//           <div className="flex items-center mb-[21px] max-w-[289px]">
//             <img src={logo} alt="Company Logo" className="w-[158px] h-[59px]" />
//             {/* <span className="text-2xl font-bold">Company Name</span> */}
//           </div>
//           {/* Text Below Logo */}
//           <p className="text-[#FFFFFF] mb-6">
//             Connecting DJs and music enthusiasts for seamless event experiences
//             and vibrant community engagement.
//           </p>
//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-[#fa942e] text-white py-2 px-4 rounded">
//               Sign Up as User
//             </button>
//             <button className="bg-[#fa942e] text-white py-2 px-4 rounded">
//               Sign Up as DJ
//             </button>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div>
//           <h3 className="text-base font-bold mb-10">Under the Hood</h3>
//           {/* Links */}
//           <ul className="space-y-2">
//             <li>
//               <a href="#link1" className="text-[#FFFFFF]">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#link2" className="text-[#FFFFFF]">
//                 Use Cases
//               </a>
//             </li>
//             <li>
//               <a href="#link3" className="text-[#FFFFFF]">
//                 Events
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 Web Apps
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 Usage Video
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 Clients Testimonials
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a href="#link4" className="text-[#FFFFFF]">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="w-[491px]">
//           <h3 className="text-base font-bold mb-4">HelpDesk</h3>
//           {/* WhatsApp and Email */}
//           <div className="flex items-center gap-[59px] mb-6">
//             <div className="flex items-center">
//               <img
//                 src={whatsappIcon}
//                 alt="WhatsApp"
//                 className="w-[34px] h-[34px] mr-1"
//               />
//               <span className="text-gray-400">+91 1234 5678 90</span>
//             </div>
//             <div className="flex items-center">
//               <img
//                 src={emailIcon}
//                 alt="Email"
//                 className="w-[34px] h-[34px] mr-1"
//               />
//               <span className="text-gray-400">team@djfyapp.com</span>
//             </div>
//           </div>

//           {/* Card Section */}
//           <div className="bg-[#09173C] p-6 rounded-lg">
//             <h4 className="text-[14px] font-medium mb-[14px]">
//               Send Us Your Message
//             </h4>
//             <form className="space-y-4">
//               {/* Name and Email */}
//               <div className="flex gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-1/2 p-3 bg-gray-700 text-white rounded focus:outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-1/2 p-3 bg-gray-700 text-white rounded focus:outline-none"
//                 />
//               </div>
//               {/* Message */}
//               <textarea
//                 rows="4"
//                 placeholder="Message"
//                 className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none"
//               ></textarea>
//               {/* Captcha and Submit */}
//               <div className="flex items-center justify-between gap-4">
//                 {/* Captcha */}
//                 <div className="flex items-center bg-white text-black rounded px-4 py-2">
//                   <input type="checkbox" id="robot" className="mr-2" />
//                   <label htmlFor="robot" className="text-sm">
//                     I am not a robot
//                   </label>
//                   <img
//                     src={robotIcon}
//                     alt="Robot Icon"
//                     className="w-6 h-6 ml-2"
//                   />
//                 </div>
//                 {/* Submit Button */}

//                 <button className="bg-[#fa942e] text-white py-2 px-6 rounded">
//                   Send message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import logo from "/src/assets/Djfi-logo-main copy 2.png";
import whatsappIcon from "/src/assets/WhatsApp 1.png";
import emailIcon from "/src/assets/Mask group (15).png";
import robotIcon from "/src/assets/Group 2143.png";

const Footer = () => {
  return (
    <footer className="bg-[#07091F] text-white py-8 px-4 md:pl-[146px] md:pr-[246px]">
      {/* Top Horizontal Line */}
      <div className="w-[100%] h-[1px] bg-gradient-to-r to-[#F6B910] from-[#D71B2C] mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          {/* Company Logo and Name */}
          <div className="flex items-center mb-6">
            <img src={logo} alt="Company Logo" className="w-[158px] h-[59px]" />
          </div>
          {/* Text Below Logo */}
          <p className="text-[#FFFFFF] mb-6 text-sm md:text-base">
            Connecting DJs and music enthusiasts for seamless event experiences
            and vibrant community engagement.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white py-2 px-4 rounded">
              Sign Up as User
            </button>
            <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white py-2 px-4 rounded">
              Sign Up as DJ
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-base font-bold mb-6">Under the Hood</h3>
          {/* Links */}
          <ul className="space-y-2 text-sm md:text-base">
            {[
              "About",
              "Use Cases",
              "Events",
              "Web Apps",
              "Usage Video",
              "Gallery",
              "Clients Testimonials",
              "FAQ",
              "Contact Us",
            ].map((link, index) => (
              <li key={index}>
                <a href={`#link${index}`} className="text-[#FFFFFF]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-base font-bold mb-4">HelpDesk</h3>
          {/* WhatsApp and Email */}
          <div className="flex gap-4 mb-6 flex-wrap xl:w-[491px]">
            <div className="flex items-center ">
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-[34px] h-[34px] mr-2"
              />
              <span className="text-gray-400 text-sm md:text-base">
                1234 5678 90
              </span>
            </div>
            <div className="flex items-center">
              <img
                src={emailIcon}
                alt="Email"
                className="w-[34px] h-[34px] mr-2"
              />
              <span className="text-gray-400 text-sm md:text-base">
                team@djfyapp.com
              </span>
            </div>
          </div>

          {/* Card Section */}
          <div className="bg-[#09173C] p-4 md:p-6 rounded-lg xl:w-[450px] md:w-[390px]">
            <h4 className="text-[14px] font-medium mb-4">
              Send Us Your Message
            </h4>
            <form className="space-y-4">
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-1/2 p-3 bg-gray-700 text-white rounded focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-1/2 p-3 bg-gray-700 text-white rounded focus:outline-none"
                />
              </div>
              {/* Message */}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none"
              ></textarea>
              {/* Captcha and Submit */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Captcha */}
                <div className="flex items-center bg-white text-black rounded px-4 py-2 w-full md:w-auto">
                  <input type="checkbox" id="robot" className="mr-2" />
                  <label htmlFor="robot" className="text-sm">
                    I am not a robot
                  </label>
                  <img
                    src={robotIcon}
                    alt="Robot Icon"
                    className="w-6 h-6 ml-2"
                  />
                </div>
                {/* Submit Button */}
                <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white py-2 px-6 rounded">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
