// components/common/Socials.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { siteConfig } from "../../constants/siteConfig"

const Socials = ({
  variant = "default",
  size = "medium",
  orientation = "horizontal",
  showLabels = false,
  className = "",
  includeContact = true,
}) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: siteConfig.social.facebook,
      icon: "fa-brands fa-square-facebook",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      url: siteConfig.social.instagram,
      icon: "fa-brands fa-instagram",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      url: siteConfig.social.linkedin,
      icon: "fa-brands fa-linkedin",
      color: "hover:text-blue-700",
    },
  ]

  const contactLinks = [
    {
      name: "Phone",
      url: `tel:${siteConfig.contact.phone}`,
      icon: "fa-solid fa-phone",
      color: "hover:text-green-600",
      display: siteConfig.contact.phone,
    },
    {
      name: "Email",
      url: `mailto:${siteConfig.contact.email}`,
      icon: "fa-solid fa-envelope",
      color: "hover:text-red-600",
      display: siteConfig.contact.email,
    },
  ]

  const allLinks = includeContact
    ? [...socialLinks, ...contactLinks]
    : socialLinks

  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  }

  const variantClasses = {
    default: "text-gray-400 hover:text-gray-600",
    light: "text-white hover:text-gray-200",
    dark: "text-gray-700 hover:text-gray-900",
    colored: "text-gray-400",
  }

  const containerClasses =
    orientation === "horizontal"
      ? "flex justify-center space-x-4 md:space-x-6"
      : "flex flex-col space-y-4"

  return (
    <div className={`${containerClasses} ${className}`}>
      {allLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className={`
            ${variantClasses[variant]} 
            ${variant === "colored" ? link.color : ""} 
            transition-colors duration-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded
            ${showLabels ? "flex items-center space-x-2" : ""}
          `}
          aria-label={`${link.name}${link.display ? `: ${link.display}` : ""}`}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}>
          <FontAwesomeIcon className={sizeClasses[size]} icon={link.icon} />
          {showLabels && (
            <span className="text-sm font-medium">
              {link.display || link.name}
            </span>
          )}
        </a>
      ))}
    </div>
  )
}

export default Socials
