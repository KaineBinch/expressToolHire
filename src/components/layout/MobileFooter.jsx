import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Map from "../googleMap"
import PDF from "../../utils/express_pricelist.pdf"

const MobFoot = () => {
  return (
    <>
      <div className="bg-accent">
        <div className="flex flex-col items-center justify-center py-10">
          <img className="" src="./src/assets/ExpressLogo.png" />
        </div>
        <div className="text-center pb-10">
          <h3 className="font-[arialBlack] text-4xl">Find Us</h3>
          <p className="text-center mt-[5px] text-sm mx-[10px] ">
            Express Tool Hire LTD, Globe House, Colwick Road, Colwick,
            Nottingham, NG2 4BG
            <br />
            <br />
            Tel: 0115 941 9900
            <br />
            Email: info@expresstoolhire.co.uk
          </p>
        </div>
        <div className="flex flex-col items-center justify-center pb-10">
          <Map />
        </div>
        {/* Footer Links */}
        <div className="text-center text-sm font-normal pb-10">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center pb-8">
              <a href="/#/about" className="mr-6 w-[125px]">
                About Us
              </a>
              <a href="/#/faqs" className="ml-6 w-[125px]">
                FAQs
              </a>
            </div>
            <div className="flex flex-row items-center justify-center pb-8">
              <a href="/#/" className="mr-6 w-[125px]">
                Flo-Gas
              </a>
              <a href={PDF} className="ml-6 w-[125px]">
                Rental Catalogue
              </a>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a href="/#/rental_policy" className="mr-6 w-[125px]">
                Rental Policy
              </a>
              <a href="/#/" className="ml-6 w-[125px]">
                Trade Hire
              </a>
            </div>
          </div>
        </div>
        {/* Socials */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only ">Facebook</span>
            <FontAwesomeIcon
              className="w-6 h-6"
              icon="fa-brands fa-square-facebook"
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon
              className="w-6 h-6"
              icon="fa-brands fa-instagram"
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon className="w-6 h-6" icon="fa-brands fa-linkedin" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Phone</span>
            <FontAwesomeIcon className="w-6 h-6" icon="fa-solid fa-phone" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Email</span>
            <FontAwesomeIcon className="w-6 h-6" icon="fa-solid fa-envelope" />
          </a>
        </div>
        <hr className="border-1 border-neutral mt-6" />
        <p className="py-8 text-base leading-6 text-center text-neutral">
          Copyright © 2024 Express Tool Hire Ltd
          <a
            href={"https://kainebinch.dev"}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost pt-4">
            Web Design
          </a>
        </p>
      </div>
    </>
  )
}
export default MobFoot
