import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { appRoutes } from "../../constants/appRoutes"
import ImageContainer from "../common/ImageContainer"

const FeaturesSection = () => {
  const features = [
    {
      title: "Wide Selection",
      description:
        "Choose from a wide and extensive range of tools and equipment to perfectly suit and cater to your specific and unique requirements and needs.",
    },
    {
      title: "Quality Tools",
      description:
        "Our tools are of the highest quality, ensuring reliable performance and durability.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="card-section p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Wide Selection of Quality Tools at Competitive Prices
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Express Tool Hire Ltd, we offer a wide range of high-quality
              tools and equipment for all your construction needs. With our
              competitive pricing, you can get the tools you need without
              breaking the bank.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-section">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={appRoutes.about} className="btn-primary-custom">
                Learn More
              </Link>
              <Link to={appRoutes.contact} className="btn-link-custom">
                Contact us
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="ml-2 h-3 w-3"
                />
              </Link>
            </div>
          </div>

          <ImageContainer
            src="./src/assets/WackerPlate.png"
            alt="Wacker Plate Tool"
            className="image-container"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
