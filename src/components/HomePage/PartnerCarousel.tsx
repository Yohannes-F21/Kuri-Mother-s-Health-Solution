import React, { useState } from "react";
import partner1 from "../../Assets/partners/Ithiel.png";
import partner2 from "../../Assets/partners/RWANDA.png";
import partner4 from "../../Assets/partners/IMG_0610.jpg";
import "../../i18n";
import { t } from "i18next";

const PartnerCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden relative ">
      <h2 className="text-3xl font-semibold text-center mt-12">
        {t("our_partners")}
      </h2>
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
                className="h-48  inline-block scale-125 mr-20"
              />
              <img
                src={partner2}
                alt="Partner 2"
                className="h-32 mt-6  inline-block scale-150 mr-20"
              />

              <img
                src={partner4}
                alt="Partner 4"
                className="h-20 mt-6 w-auto inline-block mr-20"
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
            width: max-content;
            animation: marquee-scroll 30s linear infinite;
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
