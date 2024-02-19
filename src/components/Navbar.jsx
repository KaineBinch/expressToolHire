import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HAE from "../assets/HAElogo.png";
import OrangeLogo from "../assets/SafeHireLogo.png";

const Navbar = () => {
  const location = useLocation().pathname;
  const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Products", to: "/products" },
    { title: "FAQs", to: "/faqs" },
    { title: "Rental Policy", to: "/rental_policy" },
    { title: "Contact", to: "/contact" },
  ];
  const loseActiveFocus = () => {
    const elem = document.activeElement;
    if (elem) elem.blur();
  };

  const LinkItem = (title, to, location, my = 1) => {
    const activeClasses = location === to ? "bg-primary" : "";
    return (
      <li
        key={title}
        onClick={loseActiveFocus}
        className={`rounded-md ${activeClasses} my-${my}`}
        style={{
          marginTop: my,
          marginBottom: my,
        }}
      >
        <Link to={to} className="text-center text-white inline">
          {title}
        </Link>
      </li>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-primary justify-center">
        <div className="flex w-full max-w-7xl h-[85px]  items-center px-[25px] place-content-between">
          <div className="flex ">
            <h1 className="text-white font-black text-4xl">Express</h1>
            <img src={HAE} className="pl-5 pr-1" />
            <img src={OrangeLogo} />
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              style={{ color: "#ffffff" }}
              className="text-2xl px-[5px] mt-[8px]"
            />
            <h1 className="text-white font-black text-3xl">0115 941 9900</h1>
          </div>
        </div>
      </div>
      <div className="flex bg-secondary justify-center">
        <div className="navbar max-w-7xl h-[60px]">
          <div className="flex-none">
            <div className="dropdown md:w-0 visible md:invisible">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-square text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div className="flex place-content-evenly">
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-50 font-bold"
                >
                  {links.map(({ title, to }) =>
                    LinkItem(title, to, location, 5)
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex h-[60px] items-center px-[12px] place-content-between">
            <h1 className="text-white font-black text-2xl">Tool Hire Ltd</h1>
          </div>
          <div className="flex-1 hidden md:inline-block justify-end">
            <div>
              <ul className="flex menu menu-horizontal invisible md:visible font-bold place-content-evenly">
                {links.map(({ title, to }) => LinkItem(title, to, location))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
