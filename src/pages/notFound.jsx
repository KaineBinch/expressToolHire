// pages/NotFound.jsx
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { appRoutes } from "../constants/appRoutes"

const INITIAL_REDIRECT_TIME = 10

const NotFound = () => {
  const [redirectTime, setRedirectTime] = useState(INITIAL_REDIRECT_TIME)

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectTime((prevTime) => {
        if (prevTime <= 1) {
          window.location.href = appRoutes.home
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const progressWidth = (redirectTime / INITIAL_REDIRECT_TIME) * 100

  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-8xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">
            Looks like that page isn&#39;t available
          </p>

          <div className="relative w-64 mx-auto mb-8">
            <div className="h-16 bg-black bg-opacity-60 border-4 border-double border-secondary rounded-lg p-4 flex flex-col items-center justify-center">
              <p className="text-sm mb-2">
                Automatically sending you home in:{" "}
                <span className="font-bold text-secondary">
                  {redirectTime}s
                </span>
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-secondary h-2 rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>
          </div>

          <Link
            to={appRoutes.home}
            className="btn btn-secondary text-white px-8 py-3 text-lg font-semibold hover:bg-secondary-focus transition-colors duration-300">
            Take me home now!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
