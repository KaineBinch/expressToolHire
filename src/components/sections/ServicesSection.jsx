import ImageContainer from "../common/ImageContainer"

const ServicesSection = () => {
  const services = [
    {
      title: "Tool Hire Services",
      description:
        "We offer a wide range of tools, equipment, and consumables for hire, catering to the needs of the construction industry. Our rental services ensure that you have access to the right tools and equipment to get the job done efficiently.",
    },
    {
      title: "Equipment Rental",
      description:
        "At Express Tool Hire Ltd, we provide reliable and high-quality equipment rental solutions. Whether you need heavy machinery or specialized equipment, we have a comprehensive range of options available to meet your requirements.",
    },
    {
      title: "Consumable Sales",
      description:
        "In addition to tool and equipment hire, we also offer a wide range of consumables for sale. From safety gear to construction materials, we have everything you need to complete your projects successfully.",
    },
  ]

  return (
    <section className="section-padding bg-accent">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="text-section">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <ImageContainer
            src="./src/assets/FrontLoader.png"
            alt="Front Loader Equipment"
            className="image-container"
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
