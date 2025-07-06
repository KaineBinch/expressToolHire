import ImageCarousel from "../common/ImageCarousel"

const FeaturedSection = () => {
  const featuredImages = [
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
  ]

  return (
    <section className="section-padding bg-accent">
      <div className="container-max">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Featured</h2>
          <p className="text-gray-700">
            Check out our selection of top-quality tools for hire.
          </p>
        </div>

        <ImageCarousel images={featuredImages} />
      </div>
    </section>
  )
}

export default FeaturedSection
