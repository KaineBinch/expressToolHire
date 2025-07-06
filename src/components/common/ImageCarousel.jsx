const ImageCarousel = ({ images, className = "" }) => {
  return (
    <div className={`carousel-custom ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img
            src={image}
            alt={`Featured item ${index + 1}`}
            className="rounded-box w-64 h-64 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel
