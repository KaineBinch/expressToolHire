import { Link } from "react-router-dom"
import { appRoutes } from "../../constants/appRoutes"
import { wipConfig } from "../../constants/wipConfig"

const WorkInProgress = ({ title, customMessage, showProgress = true }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-primary">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            {wipConfig.percentage}%
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title || "Under Construction"}
          </h2>
        </div>

        {showProgress && (
          <div className="mb-8">
            <div className="w-full bg-white bg-opacity-20 rounded-full h-4 mb-4">
              <div
                className="bg-secondary h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${wipConfig.percentage}%` }}
              />
            </div>
            <p className="text-white text-opacity-90">
              Progress: {wipConfig.percentage}% Complete
            </p>
          </div>
        )}

        <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
          {customMessage || wipConfig.message}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={appRoutes.home}
            className="btn btn-secondary text-white px-8 py-3 text-lg font-semibold hover:bg-secondary-focus transition-colors duration-300">
            Return Home
          </Link>
          <Link
            to={appRoutes.contact}
            className="btn btn-outline btn-secondary text-white border-white hover:bg-white hover:text-secondary px-8 py-3 text-lg font-semibold transition-colors duration-300">
            Contact Us
          </Link>
        </div>

        <div className="mt-12 text-white text-opacity-70">
          <p className="text-sm">Expected completion: Coming Soon</p>
        </div>
      </div>
    </div>
  )
}

export default WorkInProgress
