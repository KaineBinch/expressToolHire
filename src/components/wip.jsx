import { wipPercentage } from "../constants/constants";

const Wip = ({ showButton = true }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 backdrop-blur-[2px]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div
            className="radial-progress mb-4"
            style={{ "--value": wipPercentage }}
            role="progressbar"
          >
            {wipPercentage}%
          </div>
          <h1 className="mb-5 text-5xl font-bold">Oh No!</h1>
          <p className="mb-5 font-semibold">
            This page is currently under construction, Please check back later.
          </p>
          {showButton && (
            <a href="/" className="btn btn-primary hover:bg-secondary">
              Go home
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wip;
