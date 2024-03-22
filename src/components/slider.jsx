import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const featuredImages = [
  "./src/assets/sliderImages/Digger.png",
  "./src/assets/sliderImages/Diggers.png",
  "./src/assets/sliderImages/Heaters.png",
  "./src/assets/sliderImages/Roller.png",
  "./src/assets/sliderImages/Scaffold-hoist.png",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === featuredImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-[25px] carousel w-full max-w-7xl relative overflow-hidden">
      <div className="carousel-inner flex">
        {featuredImages.map((src, i) => (
          <m.div
            key={i}
            className="carousel-item w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
            initial={{ x: 0 }}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <img src={src} className="w-full" />
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
