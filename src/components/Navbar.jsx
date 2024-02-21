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
      {/* Top Navbar */}
      <div className="flex bg-primary justify-center">
        <div className="flex w-full max-w-7xl h-[85px] items-center md:px-[25px] px-[5px] place-content-between">
          <div className="flex">
            <h1 className="md:visible md:w-auto w-0 invisible  text-white font-black md:text-4xl text-xl md:px-[0px] px-[0px]">
              Express
            </h1>
            <div className="flex md:max-w-[100px] ">
              <img
                src={HAE}
                className="md:pl-5 md:pr-1 max-w-[30px] max-h-[30px] md:max-w-[100px] md:max-h-[100px]"
              />
              <img
                src={OrangeLogo}
                className="pl-1 max-w-[50px] max-h-[30px] md:max-w-[100px] md:max-h-[100px]"
              />
            </div>
          </div>
          <div className="md:invisible visible text-white font-black text-2xl justify-self-center w-full absolute  ">
            <h1>Express</h1>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              style={{ color: "#ffffff" }}
              className="md:text-2xl text-[13px] md:px-[5px] md:mt-[8px] px-[3px] mt-[5px] md:visible invisible"
            />
            <h1 className="flex text-sm font-normal text-white md:font-black md:text-3xl ">
              0115 941 9900
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="flex bg-secondary justify-center">
        <div className="navbar max-w-7xl h-[60px]">
          <div className="flex-none">
            <div className="dropdown md:w-0 w-[64px] visible md:invisible justify-center items-center z-10 ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-square text-white justify-center items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="3 3 20 20"
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
                  className="menu dropdown-content ml-32 mt-[12px] p-4 shadow bg-secondary rounded-box w-[200px] font-bold "
                >
                  {links.map(({ title, to }) =>
                    LinkItem(title, to, location, 5)
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex h-[60px] px-[12px] md:visible invisible">
            <h1 className="text-white font-black md:text-2xl text-md">
              Tool Hire Ltd
            </h1>
          </div>
          <div className="md:invisible visible w-full left-0 flex justify-center h-[60px] absolute">
            <h1 className="ml-2 text-white font-black md:text-2xl text-lg">
              Tool Hire Ltd
            </h1>
          </div>
          <div className="flex-1 hidden md:inline-block justify-end ">
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
