import React, { useState } from "react";

const PartnerCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full overflow-hidden relative">
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
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Partner 1"
                className="h-12 w-auto inline-block"
              />
              <img
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Partner 2"
                className="h-12 w-auto inline-block"
              />
              <img
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Partner 3"
                className="h-12 w-auto inline-block"
              />
              <img
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Partner 4"
                className="h-12 w-auto inline-block"
              />
              <img
                src="https://www.parsipediatrics.com/wp-content/uploads/2021/12/breast-feeding.jpg"
                alt="Partner 5"
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
