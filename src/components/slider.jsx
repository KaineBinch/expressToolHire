/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

const featuredImages = [
  "./src/assets/sliderImages/Digger.png",
  "./src/assets/sliderImages/Diggers.png",
  "./src/assets/sliderImages/Heaters.png",
  "./src/assets/sliderImages/Roller.png",
  "./src/assets/sliderImages/Scaffold-hoist.png",
];

let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className="flex justify-center items-center align-center w-full mt-[25px] mb-[25px] md:mt-[100px] md:mb-[100px] px-[10px] select-none relative"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={featuredImages[currentIndex]}
          alt=""
          className="md:max-h-[800px] md:max-w-[800px]"
        />
      </div>
    </div>
  );
}
