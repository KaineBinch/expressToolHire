import { Link } from "react-router-dom"
import { appRoutes } from "../../constants/appRoutes"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold text-center mb-6">
            TOOL HIRE <br /> SPECIALISTS
          </h1>
          <p className="text-md md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Express Tool Hire Ltd offers a wide selection of tools and equipment
            to meet your construction needs. With our competitive prices and
            reliable service, you can trust us to provide the tools you need to
            get the job done.
          </p>
          <Link
            to={appRoutes.products}
            className="btn-primary-custom inline-block">
            Click to see our products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
