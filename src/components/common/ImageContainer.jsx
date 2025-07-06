const ImageContainer = ({ src, alt, className = "", ...props }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        {...props}
      />
    </div>
  )
}

export default ImageContainer
