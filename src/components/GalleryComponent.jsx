import React from "react";
import logo from "/src/assets/Mask group.png";
import group from "/src/assets/Group 11.png";
import img1 from "/src/assets/Maskgroup1-ezgif.com-png-to-webp-converter.webp";
import img2 from "/src/assets/Maskgroup2-ezgif.com-optiwebp.webp";
import img3 from "/src/assets/Maskgroup3-ezgif.com-png-to-webp-converter.webp";
import img4 from "/src/assets/Maskgroup4-ezgif.com-png-to-webp-converter.webp";
import img5 from "/src/assets/Maskgroup5-ezgif.com-png-to-webp-converter.webp";
import img6 from "/src/assets/Maskgroup6-ezgif.com-png-to-webp-converter.webp";
import img7 from "/src/assets/Maskgroup7-ezgif.com-png-to-webp-converter.webp";
import img8 from "/src/assets/Maskgroup8-ezgif.com-png-to-webp-converter.webp";
import img9 from "/src/assets/Maskgroup9-ezgif.com-png-to-webp-converter.webp";
import img10 from "/src/assets/Maskgroup10-ezgif.com-png-to-webp-converter.webp";

const GalleryComponent = () => {
  return (
    <div className="bg-[#07091F] text-white min-h-screen flex flex-col items-center justify-center pt-[128px] pb-[108px]">
      {/* Top Logo */}
      <img src={logo} alt="Logo" className="w-[74px] h-[74px] mb-[23px]" />

      {/* Heading */}
      <h1 className="text-[32px] mb-[13px] text-[#ED3E31]">Gallery</h1>

      {/* Bottom Logo */}
      <img src={group} alt="Logo" className="w-[49px] h-[21px] mb-[18px]" />

      {/* Lorem Text */}
      <p className="text-center text-base text-[#FFFFFF] mb-[27px] max-w-[785px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] max-w-[1044px]">
        <img src={img1} alt="Gallery image 1" className="w-full h-auto" />
        <img src={img2} alt="Gallery image 2" className="w-full h-auto" />
        <img src={img3} alt="Gallery image 3" className="w-full h-auto" />
        <img src={img4} alt="Gallery image 4" className="w-full h-auto" />
        <img src={img5} alt="Gallery image 5" className="w-full h-auto" />
        <img src={img6} alt="Gallery image 6" className="w-full h-auto" />
        <img src={img7} alt="Gallery image 7" className="w-full h-auto" />
        <img src={img8} alt="Gallery image 8" className="w-full h-auto" />
        <img src={img9} alt="Gallery image 9" className="w-full h-auto" />
        <img src={img10} alt="Gallery image 10" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default GalleryComponent;
