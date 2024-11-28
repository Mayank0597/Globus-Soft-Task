import React from "react";
import facebookIcon from "/src/assets/f.png";
import twitterIcon from "/src/assets/twitter.png";
import instagramIcon from "/src/assets/instagram.png";
import linkedinIcon from "/src/assets/linked_in.png";

const BottomSection = () => {
  return (
    <div className="bg-[#040514] text-white py-[6px] px-6 md:py-[13px] md:px-[198px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Copyright Text */}
        <div className="text-sm md:text-base mb-4 md:mb-0">
          © 2024 DjFy. All Rights Reserved
        </div>

        {/* Right Side - Connect and Icons */}
        <div className="flex items-center space-x-[19px]">
          <span className="text-sm md:text-base">Connect -</span>
          {/* Social Media Icons */}
          <a href="#facebook" aria-label="Facebook">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-[8px] h-[15px] md:w-[10px] md:h-[23px]"
            />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-[8px] h-[15px] md:w-[17px] md:h-[13px]"
            />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[8px] h-[15px] md:w-[16px] md:h-[20px]"
            />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-[8px] h-[15px] md:w-[18px] md:h-[22px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
