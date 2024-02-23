const featuredImages = [
  "./src/assets/sliderImages/Digger.png",
  "./src/assets/sliderImages/Diggers.png",
  "./src/assets/sliderImages/Heaters.png",
  "./src/assets/sliderImages/Roller.png",
  "./src/assets/sliderImages/Scaffold-hoist.png",
];

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div className="carousel-item w-full">
        {featuredImages.map((src, i) => (
          <div key={i} className="carousel-item w-full">
            <img src={src} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
