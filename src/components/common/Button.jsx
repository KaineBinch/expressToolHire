import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  to,
  href,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary:
      "bg-secondary text-white hover:bg-secondary-focus focus:ring-secondary",
    secondary:
      "bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
    link: "text-secondary hover:text-secondary-focus underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <FontAwesomeIcon icon={icon} className="mr-2" />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <FontAwesomeIcon icon={icon} className="ml-2" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

export { Button }
