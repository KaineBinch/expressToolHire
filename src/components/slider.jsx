// components/common/Slider.jsx
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DEFAULT_IMAGES = [
  "./src/assets/sliderImages/Digger.png",
  "./src/assets/sliderImages/Diggers.png",
  "./src/assets/sliderImages/Heaters.png",
  "./src/assets/sliderImages/Roller.png",
  "./src/assets/sliderImages/Scaffold-hoist.png",
]

const Slider = ({
  images = DEFAULT_IMAGES,
  autoPlay = true,
  autoPlayInterval = 3000,
  showIndicators = true,
  showControls = false,
  className = "",
  imageClassName = "",
  alt = "Equipment image",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (!isPlaying || !autoPlay) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isPlaying, autoPlay, autoPlayInterval, nextSlide])

  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(autoPlay)

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Main slider container */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0">
            <img
              src={images[currentSlide]}
              alt={`${alt} ${currentSlide + 1}`}
              className={`w-full h-full object-cover ${imageClassName}`}
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}

export default Slider
