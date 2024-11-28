import React, { useState } from "react";
import logo from "/src/assets/Group 2081.png";
import bottomImg from "/src/assets/Group 11.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  // Accordion data
  const accordions = [
    {
      id: 1,
      title: "What is DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 2,
      title: "How does DJFY work?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 3,
      title: "Can I use DJFY for free? ",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 4,
      title: "How do I earn money with DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 5,
      title: "Can I reject song requests on DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 6,
      title: "How are paid song requests handled on DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 7,
      title: " Is DJFY available for all types of events?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 8,
      title: "How do I sign up for DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 9,
      title: " Can I use DJFY on my mobile device?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 10,
      title: "How can I get support if I have questions or issues with DJFY?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 11,
      title: "Can I make money promoting DJFY App?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
    {
      id: 12,
      title: " What are DJFY's administrative fees and charges?",
      text: "DJFY is a web app that revolutionizes the music experience by enabling DJs, live musicians/bands, and street performers/musicians to accept song requests and interact with their audience in real-time. It provides a platform for artists to create a new stream of income while enhancing audience engagement during performances.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07091F] flex flex-col items-center justify-center py-[95px] text-white">
      {/* Logo at the top */}
      <img src={logo} alt="Logo" className="w-[54px] h-[54px] mb-[27px]" />

      {/* FAQ Text */}
      <h1 className="text-[32px] text-[#ED3E31] mb-[10px] text-center">FAQ</h1>

      {/* Logo Below FAQ Text */}
      <img src={bottomImg} alt="Logo" className="w-[49px] h-[21px] mb-[29px]" />
      <hr className="w-full max-w-[1147px] border-gray-600 mb-6" />

      {/* Accordion Section */}
      <div className="w-full max-w-[1147px]">
        {accordions.map((accordion, index) => (
          <div key={accordion.id} className="mb-6">
            {/* Accordion Title */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left px-4 py-3 rounded-lg text-white  flex justify-between items-center"
            >
              <span className="text-lg">{accordion.title}</span>
              <span>
                {openAccordion === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>

            {/* Accordion Content */}
            {openAccordion === index && (
              <div className="mt-3 px-4 text-gray-300">
                <p>{accordion.text}</p>
              </div>
            )}

            {/* Horizontal Divider */}
            {index < accordions.length  && (
              <hr className="border-t border-gray-600 mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
