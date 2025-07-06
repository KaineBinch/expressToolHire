import { Link, useLocation } from "react-router-dom"
import HAE from "../../assets/HAElogo.png"
import OrangeLogo from "../../assets/SafeHireLogo.png"
import Logo from "../Logo"

const Navbar = () => {
  const location = useLocation().pathname
  const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Products", to: "/products" },
    { title: "FAQs", to: "/faqs" },
    { title: "Rental Policy", to: "/rental_policy" },
    { title: "Contact", to: "/contact" },
  ]
  const loseActiveFocus = () => {
    const elem = document.activeElement
    if (elem) elem.blur()
  }

  const LinkItem = (title, to, location, my = 1) => {
    const activeClasses = location === to ? "bg-secondary" : ""
    return (
      <li
        key={title}
        onClick={loseActiveFocus}
        className={`rounded-t-md ${activeClasses} my-${my}`}
        style={{
          marginTop: my,
          marginBottom: my,
        }}>
        <Link to={to} className="text-center text-white inline">
          {title}
        </Link>
      </li>
    )
  }

  return (
    <div className="w-screen flex bg-primary justify-center border-b-[20px] border-secondary">
      <div className="flex navbar max-w-7xl lg:h-[90px] md:h-[60px] h-[50px] place-content-between">
        <div className="flex-none">
          <div className="dropdown visible md:invisible justify-center items-center z-10 md:w-0 w-auto pt-2">
            <label
              tabIndex={0}
              className="btn btn-ghost rounded-md btn-square text-white justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="3 3 20 20"
                className="inline-block w-5 h-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
            <div className="flex place-content-evenly">
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-opacity-80 ml-[90px] mt-[25px] p-4 shadow bg-secondary rounded-box w-[150px] font-bold">
                {links.map(({ title, to }) => LinkItem(title, to, location, 5))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:visible invisible w-0 md:w-auto">
          <Logo />
          <div className="flex max-w-[100px] lg:pl-8 pl-2 justify-center pt-5">
            <img
              src={HAE}
              className="pr-1 max-w-[40px] max-h-[40px] lg:max-w-[60px] lg:max-h-[60px]"
            />
            <img
              src={OrangeLogo}
              className="pl-1 lg:pl-0 max-w-[40px] max-h-[40px] lg:max-w-[60px] lg:max-h-[60px]"
            />
          </div>
        </div>
        <div className="md:invisible visible pt-2 flex w-full md:w-0 place-content-between">
          <div className="flex justify-center">
            <img src={HAE} className=" max-w-[30px] max-h-[30px] " />
            <img src={OrangeLogo} className="pl-1 max-w-[50px] max-h-[30px]" />
          </div>

          <a
            href="tel:01159419900"
            className="md:invisible visible flex z-10 items-end justify-end text-sm font-normal text-white pr-3">
            0115 941 9900
          </a>
        </div>
        <div className="md:invisible visible absolute w-full left-0 flex items-center justify-center">
          <Logo />
        </div>
        <div className="h-full hidden md:inline-block flex grow">
          <ul className="h-full flex menu menu-horizontal invisible md:visible font-bold place-content-evenly lg:pt-16 pt-10">
            {links.map(({ title, to }) => LinkItem(title, to, location))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
