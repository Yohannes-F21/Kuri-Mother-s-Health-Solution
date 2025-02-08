import React, { useState } from "react";
import partner1 from "../../Assets/partners/hh.png";
import partner2 from "../../Assets/partners/RWANDA.png";
import partner3 from "../../Assets/partners/Ithiel.png";
import partner4 from "../../Assets/partners/IMG_0610.jpg";

const PartnerCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden relative ">
      <div
        className="flex items-center  py-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="marquee"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {/* Partner Logos (Repeated Twice for Infinite Scroll Effect) */}
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <img
                src={partner1}
                alt="Partner 1"
                className="h-20 w-40 inline-block scale-125"
              />
              <img
                src={partner2}
                alt="Partner 2"
                className="h-20  inline-block scale-150"
              />
              <img
                src={partner3}
                alt="Partner 3"
                className="h-20 w-40 inline-block scale-125"
              />
              <img
                src={partner4}
                alt="Partner 4"
                className="h-12 w-auto inline-block"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Styles */}
      <style>
        {`
          .marquee {
            display: flex;
            gap: 5rem;
            width: max-content;
            animation: marquee-scroll 7s linear infinite;
          }

          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PartnerCarousel;
