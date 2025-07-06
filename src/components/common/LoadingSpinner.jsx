import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <FontAwesomeIcon
          icon="fa-solid fa-spinner"
          spin
          className="text-4xl text-secondary mb-4"
        />
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

export default { LoadingSpinner }
