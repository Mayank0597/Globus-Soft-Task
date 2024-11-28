import React from "react";
import bgImage from "/src/assets/professional-dj-woman-entertaining-night1-ezgif.com-optiwebp.webp";
import filter from "/src/assets/Rectangle 4.png";
import search from "/src/assets/Group 2022.png";
import logo from "/src/assets/Group 11.png";
import topImage from "/src/assets/Screenshot_41-ezgif.com-optiwebp.webp";
import bottomImage from "/src/assets/Maskgroup17-ezgif.com-png-to-webp-converter.webp";
import rectangleImage from "/src/assets/Rectangle 3 (1).png";
import squareImage from "/src/assets/Vector 1.png";
import company from "/src/assets/Djfi-icon 1.png";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full"
      />

      {/* Filter Image */}
      <img
        src={filter}
        alt="Filter"
        className="absolute inset-0 w-full h-full"
      />

      {/* Search Image */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <img
          src={search}
          alt="Search"
          className="w-[76px] h-[76px] object-cover"
        />
      </div>

      {/* Rectangle with Square Section */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="relative flex items-center w-3/4 md:w-2/3 bg-transparent">
          {/* Rectangular Image */}
          <img
            src={rectangleImage}
            alt="Rectangle"
            className="w-full h-[100px] md:h-[91.5px] object-cover hidden lg:block"
          />
          {/* Square Image with Logo */}
          <div className="absolute inset-0 flex items-center justify-center top-[39px] ">
            <img
              src={squareImage}
              alt="Square"
              className="w-16 h-16 md:w-[232px] md:h-[132px] object-cover hidden lg:block"
            />
            <img
              src={company}
              alt="Company Logo"
              className="absolute w-10 h-10 md:w-[97px] md:h-[97px] hidden lg:block"
            />
          </div>
          {/* Links */}
          <div className="absolute top-0 left-0 flex flex-wrap items-center justify-between w-full h-full px-4 py-5 md:py-0 text-white text-sm md:text-[16px] font-semibold comfortaa">
            {/* Left Links */}
            <div className="flex items-center gap-4 md:gap-10">
              <a href="#about" className="hover:underline">
                About us
              </a>
              <a href="#use-cases" className="hover:underline">
                Use Cases
              </a>
              <a href="#events" className="hover:underline">
                Events
              </a>
            </div>
            {/* Right Links */}
            <div className="flex items-center gap-4 md:gap-10">
              <a href="#web-app" className="hover:underline">
                Web App
              </a>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
              <a href="#contact-us" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-between lg:pt-[210px] pt-10 lg:px-[152px]">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-3xl md:text-[42px] font-medium mb-4 mt-20 md:mt-0">
            About <span className="text-[#EC3533]">DJFY</span>
          </h1>
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 md:w-[49px] md:h-[22px] mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm md:text-lg font-medium text-justify max-w-80 sm:max-w-96 md:max-w-full">
            Introducing DJFY, the ultimate platform revolutionizing the music
            industry by offering a seamless alternative stream of income for
            DJs, live musicians/bands, and street performers/musicians. With
            DJFY, every artist and venue owner can easily create a free account
            and receive a unique QR code to share with their audience, unlocking
            the power of interactive music experiences like never before.
            <br />
            <p>
              With DJFY, artists and venues can tap into a new revenue stream
              while providing an immersive and interactive music experience for
              their audience. Join DJFY today and unlock the potential of your
              performances like never before!
            </p>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative hidden lg:block">
          {/* Base Image */}
          <img
            src={bottomImage}
            alt="Image 1"
            className="w-1/3 xl:w-[420px] lg:w-[330px] h-[384px] rounded-lg absolute lg:right-10 top-10"
          />
          {/* Overlapping Image */}
          <img
            src={topImage}
            alt="Image 2"
            className="absolute -top-10 md:-top-2 lg:-right-10 md:right-32 w-1/3 lg:w-[330px] xl:w-[422px] h-[387px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
