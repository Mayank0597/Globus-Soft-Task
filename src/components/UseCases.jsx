import React from "react";
import img1 from "/src/assets/Maskgroup16-ezgif.com-png-to-webp-converter.webp";
import img2 from "/src/assets/Rectangle28-ezgif.com-optiwebp.webp";

const UseCases = () => {
  return (
    <div className="bg-[#09173C] md:px-[200px] pt-[40px] pb-[144px]">
      {/* Heading */}
      <h2 className="text-center text-[42px] font-medium text-[#FFFFFF] mb-[14px]">
        Use <span className="text-[#ED3E31]">Cases</span>
      </h2>
      {/* Underline with Dots */}
      <div className="flex justify-center md:mb-[85px] mb-16">
        <div className="flex">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="w-1 h-1 bg-[#ED3E31] rounded-full"
            ></div>
          ))}
        </div>
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-[46px] mb-[85px] max-w-[1038px]">
        {/* Image on Left */}
        <div className="">
          <img
            src={img1}
            alt="First Use Case"
            className="w-[448px] h-auto rounded-lg"
          />
        </div>
        {/* Text Content on Right */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[32px] font-medium text-[#ED3E31] mb-4">
            BAR/CLUB/VENUE DJ
          </h3>
          <p className="text-[#FFFFFF] text-justify mb-[29px] lg:max-w-[544px] max-w-[400px]">
            In bars and clubs, our app empowers guests to influence the music
            and request their song. With a simple scan and tap, they request
            songs from Spotify or Youtube library, while DJs curate a playlist
            that keeps the dance floor packed. It's a seamless experience that
            adds excitement to every night out.
          </p>
          <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white px-6 py-2 rounded-lg ">
            Register
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-[49px]">
        {/* Text Content on Left */}
        <div className=" text-center md:text-left">
          <h3 className="text-[32px] font-medium text-[#FDDF09] mb-4">
            MUSICIANS / BANDS
          </h3>
          <p className="text-justify text-[#FFFFFF] mb-[29px] lg:max-w-[544px] max-w-[350px]">
            Musicians and bands use our app to connect with fans during live
            shows. By displaying a QR code, they invite the audience to request
            songs. Fans scan the code browse the playlist, and submit requests,
            making each performance unique and interactive.
          </p>
          <button className="bg-gradient-to-b from-[#F6B910] to-[#D71B2C] text-white px-6 py-2 rounded-lg">
            Register
          </button>
        </div>
        {/* Image on Right */}
        <div className="">
          <img
            src={img2}
            alt="Second Use Case"
            className="w-[448px] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
