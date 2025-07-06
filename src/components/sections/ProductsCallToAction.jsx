import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { appRoutes } from "../../constants/appRoutes"
import PDF from "../../utils/express_pricelist.pdf"

const ProductsCallToAction = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Find the Right Tools Here</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We offer a wide selection of tools, equipment, and consumables to
            meet all your construction project needs. Search through our
            available products or download our full rental catalogue below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={appRoutes.products} className="btn-primary-custom">
              Browse Products
            </Link>
            <a href={PDF} className="btn-link-custom justify-center" download>
              Download Full Catalogue
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="ml-2 h-3 w-3"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCallToAction
