// components/common/Logo.jsx
import { Link } from "react-router-dom"
import { siteConfig } from "../constants/siteConfig"
import { appRoutes } from "../constants/appRoutes"

const Logo = ({
  variant = "default",
  size = "medium",
  linkToHome = true,
  className = "",
  showTagline = true,
}) => {
  const sizeClasses = {
    small: {
      container: "text-sm lg:text-base",
      tagline: "text-xs lg:text-sm px-1 py-0.5 -mb-2 lg:-mb-3",
    },
    medium: {
      container: "text-lg lg:text-2xl md:text-xl",
      tagline:
        "text-sm lg:text-lg md:text-md px-2 py-1 -mb-3 lg:-mb-6 md:-mb-3",
    },
    large: {
      container: "text-2xl lg:text-4xl md:text-3xl",
      tagline:
        "text-lg lg:text-2xl md:text-xl px-3 py-2 -mb-4 lg:-mb-8 md:-mb-5",
    },
  }

  const variantClasses = {
    default: "text-white",
    dark: "text-gray-900",
    light: "text-white",
    primary: "text-primary",
  }

  const currentSize = sizeClasses[size]
  const currentVariant = variantClasses[variant]

  const logoContent = (
    <div
      className={`font-bold font-heading ${currentSize.container} ${currentVariant} ${className}`}>
      <h1 className="text-center">Express</h1>
      {showTagline && (
        <h2
          className={`bg-secondary text-white rounded ${currentSize.tagline} leading-tight`}>
          Tool Hire Ltd
        </h2>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link
        to={appRoutes.home}
        className="inline-block hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded"
        aria-label={`${siteConfig.name} - Go to homepage`}>
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

export default Logo
