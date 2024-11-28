import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import bgImage from "/src/assets/professional-dj-woman-entertaining-night1-ezgif.com-optiwebp.webp"

const CustomComponent = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="bg-[#07091F] text-white py-2 px-4 flex flex-wrap items-center justify-between text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>email@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+1234567890</span>
          </div>
        </div>
        {/* Middle Section */}
        <div className="text-center flex-1">
          <a href="#" className="underline">
            Login/Register
          </a>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-2">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center w-full h-auto"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Navbar Image */}
        <div className="relative">
          <img src="/path/to/navbar.jpg" alt="Navbar" className="w-full" />
          {/* Rectangular Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-64 h-40 bg-white rounded-lg shadow-lg">
              <img
                src="/path/to/inner-image.jpg"
                alt="Inner"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Navbar Links */}
          <div className="absolute inset-0 flex justify-between items-center px-6 text-white text-sm font-medium">
            {/* Left Links */}
            <div className="flex gap-4">
              <a href="#about" className="hover:underline">
                About Us
              </a>
              <a href="#use-cases" className="hover:underline">
                Use Cases
              </a>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </div>
            {/* Right Links */}
            <div className="flex gap-4">
              <a href="#web-app" className="hover:underline">
                Web App
              </a>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with Search Image */}
        <div className="absolute top-20 right-6">
          <img
            src="/path/to/search-image.jpg"
            alt="Search"
            className="w-12 h-12 object-cover"
          />
        </div>

        {/* Overlapping Section */}
        <div className="absolute bottom-10 left-6 right-6 bg-transparent flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl text-white font-semibold mb-2">Heading</h2>
            <img
              src="/path/to/logo.jpg"
              alt="Logo"
              className="w-20 h-20 mx-auto md:mx-0"
            />
            <p className="text-white mt-4">
              This is some descriptive text about the topic. It provides more
              information and engages the user.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative">
            <img
              src="/path/to/image1.jpg"
              alt="Image 1"
              className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg"
            />
            <img
              src="/path/to/image2.jpg"
              alt="Image 2"
              className="absolute -top-10 -right-10 w-3/4 md:w-2/3 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
