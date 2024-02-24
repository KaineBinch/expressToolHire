import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../components/slider";
import Map from "../components/googleMap";
import PDF from "../utils/express_pricelist.pdf";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <div className="hero min-h-[65svh] bg-accent">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="md:text-6xl mt-[25px] text-5xl font-[ArialBlack]">
              TOOL HIRE SPECIALISTS
            </h1>
            <p className="py-6 font- text-md">
              Express Tool Hire Ltd offers a wide selection of tools and
              equipment to meet your construction needs. With our competitive
              prices and reliable service, you can trust us to provide the tools
              you need to get the job done.
            </p>
            <a href="/#/products" className="btn btn-secondary text-white">
              Click to see our products{" "}
            </a>
          </div>
        </div>
      </div>
      <Slider />
      <div className="min-h-[60svh] bg-accent md:flex md:flex-col md:max-w-7xl">
        <div className="bg-accent pt-[40px] mr-[30px]">
          <h1 className="text-3xl text-left ml-[10px] font-[ArialBlack] ">
            Wide Selection of Quality Tools at Competitive Prices
          </h1>
          <p className="py-6 text-left ml-[10px]">
            At Express Tool Hire Ltd, we offer a wide range of high-quality
            tools and equipment for all your construction needs. With our
            competitive pricing, you can get the tools you need without breaking
            the bank.
          </p>
        </div>
        {/* Info */}
        <div className="flex md:flex-row flex-col">
          <div className="text-left ml-[10px] mr-[30px]">
            <h3 className="font-[arialBlack] text-xl">Wide Selection</h3>
            <p className="text-left mt-[5px]">
              Choose from a wide and extensive range of tools and equipment to
              perfectly suit and cater to your specific and unique requirements
              and needs.
            </p>
          </div>
          <div className="text-left ml-[10px] mt-[20px] mr-[30px]">
            <h3 className="font-[arialBlack] text-xl">Quality Tools</h3>
            <p className="text-left mt-[5px]">
              Our tools are of the highest quality, ensuring reliable
              performance and durability.
            </p>
          </div>
        </div>
        <div className="flex flex-1 ml-[10px] mt-[25px] pb-[25px]">
          <a href="/#/about" className="btn btn-secondary text-white">
            Learn More
          </a>
          <a href="/#/contact" className="flex items-center pl-4 ">
            Contact us{" "}
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              className="ml-1 h-3 w-3"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="m-5 max-h-[350px] max-w-[350px]">
          <img
            src="./src/assets/WackerPlate.png"
            className="justify-content-center max-h-[350px] max-w-[350px]"
          />
        </div>
      </div>
      {/* Services Info */}
      <div className="min-h-[100svh] bg-accent md:flex md:flex-col md:max-w-7xl">
        <div className="text-left ml-[60px] pt-[40px]">
          <h3 className="font-[arialBlack] text-2xl">Tool Hire Services</h3>
          <p className="text-left mt-[5px] mr-[30px]">
            We offer a wide range of tools, equipment, and consumables for hire,
            catering to the needs of the construction industry. Our rental
            services ensure that you have access to the right tools and
            equipment to get the job done efficiently.
          </p>
        </div>
        <div className="text-left ml-[60px] pt-5">
          <h3 className="font-[arialBlack] text-2xl">Equipment Rental</h3>
          <p className="text-left mt-[5px] mr-[30px]">
            At Express Tool Hire Ltd, we provide reliable and high-quality
            equipment rental solutions. Whether you need heavy machinery or
            specialized equipment, we have a comprehensive range of options
            available to meet your requirements.
          </p>
        </div>
        <div className="text-left ml-[60px] pt-5">
          <h3 className="font-[arialBlack] text-2xl">Consumable Sales</h3>
          <p className="text-left mt-[5px] mr-[30px]">
            In addition to tool and equipment hire, we also offer a wide range
            of consumables for sale. From safety gear to construction materials,
            we have everything you need to complete your projects successfully.
          </p>
        </div>
      </div>
      <div className="py-[15px] w-auto flex items-center justify-center ">
        <img
          src="./src/assets/FrontLoader.png"
          className="justify-content-center max-h-[350px] max-w-[350px]"
        />
      </div>
      {/* Featured */}
      <div className="min-h-[100svh] bg-accent md:flex md:flex-col md:max-w-7xl pt-[40px]">
        <h3 className="font-[arialBlack] text-left mx-[10px] text-4xl">
          Featured
        </h3>
        <p className="text-left text-sm ml-[10px] mt-[5px] mr-[30px]">
          Check out our selection of top-quality tools for hire.
        </p>
        <div className="min-h-[400px] bg-neutral ml-[10px] mt-[30px] rounded-l-md">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Find the Right Tools Here */}
      <div className="">
        <div className="min-h-[60svh] bg-white md:flex md:flex-col md:max-w-7xl pt-[40px]">
          <div className="text-left ml-[10px] mt-[20px] mr-[30px]">
            <h3 className="font-[arialBlack] text-3xl">
              Find the Right Tools Here
            </h3>
            <p className="text-left mt-[10px]">
              We offer a wide selection of tools, equipment, and consumables to
              meet all your construction project needs. Search through our
              available products or download our full rental catalogue below.
            </p>
          </div>

          <div className="flex flex-1 ml-[10px] mt-[25px]">
            <a href="/#/products" className="btn btn-secondary text-white px-6">
              Products
            </a>
            <a href={PDF} className="flex items-center pl-4 ">
              Full rental catalogue{" "}
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="ml-1 h-3 w-3"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Frequently Asked Questions */}
      <div className="min-svh-[250px] bg-accent pb-7">
        <div className="text-left ml-[10px] mt-[20px] mr-[10px] pt-[40px]">
          <h3 className="font-[arialBlack] text-3xl">
            Frequently Asked Questions
          </h3>
          <p className="text-left mt-[10px] mr-[20px] pb-10">
            Find answers to common questions about tool hire, rental terms and
            customer support.
          </p>
          <div className="bg-neutral rounded-md">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                How to rent tools?
              </div>
              <div className="collapse-content text-md">
                <p>hello</p>
              </div>
              <hr className="border-black" />
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                Do you provide support?
              </div>
              <div className="collapse-content text-md">
                <p>hello</p>
              </div>
              <hr className="border-black" />
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg font-bold">
                What are the rental terms?
              </div>
              <div className="collapse-content text-md">
                <p>
                  Our rental terms vary depending on the duration of the hire.
                  We offer flexible options to suit your project needs. Contact
                  us for more details.
                </p>
              </div>
              <hr className="border-black" />
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                Can i extend my hire?
              </div>
              <div className="collapse-content text-md">
                <p>hello</p>
              </div>
              <hr className="border-black" />
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-bold">
                What if i need delivery?
              </div>
              <div className="collapse-content text-md">
                <p>hello</p>
              </div>
              <hr className="border-black" />
            </div>
            <div>
              <h3 className="font-bold ml-[16px] mt-[20px] text-lg">
                Still have questions?
              </h3>
              <p className="text-left ml-[16px] mt-[10px] mr-[20px]">
                Contact us for more information.
              </p>
            </div>
            <div className="mt-[15px] ml-[16px] mb-[20px] pb-7">
              <a
                href="/#/contact"
                className="btn btn-secondary text-white px-6"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Meet our team */}
      <div>
        <div className="text-center pt-[40px]">
          <h3 className="font-[arialBlack] text-4xl">Meet Our Team</h3>
          <p className="text-center mt-[5px] text-lg mx-[10px]">
            Get to know the experienced team behind Express Tool Hire Ltd.
          </p>
        </div>

        <div className="flex flex-col pt-10 mx-5 my-5">
          <img
            className="rounded-xl"
            src="./src/assets/teamImages/richHead.png"
          />
          <h3 className="font-[arialBlack] text-2xl">Richard Hayden</h3>
          <h4 className="text-md">Director</h4>
          <p className="text-center text-sm mt-[10px] text-lg mx-[10px]">
            With over 20 years of experience in the construction industry,
            Richard ensures smooth operations.
          </p>
        </div>
        <div className="flex flex-col pt-10 mx-5 my-5">
          <img
            className="rounded-xl"
            src="./src/assets/teamImages/kaineHead.png"
          />
          <h3 className="font-[arialBlack] text-2xl">Kaine Binch</h3>
          <h4 className="text-md">Director of fun</h4>
          <p className="text-center text-sm mt-[10px] text-lg pb-[10px] my-[25px]">
            I wanted to put another person on and thought it would be easier to
            use my name than search for people you work with.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="min-svh-[250px] bg-accent pt-10">
        <div className="flex flex-col items-center justify-center">
          <img className="" src="./src/assets/ExpressLogo.png" />
        </div>
        <div className="text-center pt-[40px]">
          <h3 className="font-[arialBlack] text-4xl">Find Us</h3>
          <p className="text-center mt-[5px] text-sm mx-[10px] pb-7">
            Express Tool Hire LTD, Globe House, Colwick Road, Colwick,
            Nottingham, NG2 4BG
            <br />
            <br />
            Tel: 0115 941 9900
            <br />
            Email: info@expresstoolhire.co.uk
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Map />
        </div>
        {/* Footer Links */}
        <div className="text-center text-sm font-normal">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center ">
              <a href="/#/about" className="mr-6 w-[125px]">
                About Us
              </a>
              <a href="/#/faqs" className="ml-6 w-[125px]">
                FAQs
              </a>
            </div>
            <div className="flex flex-row items-center justify-center pt-8">
              <a href="/#/" className="mr-6 w-[125px]">
                Flo-Gas
              </a>
              <a href={PDF} className="ml-6 w-[125px]">
                Rental Catalogue
              </a>
            </div>
            <div className="flex flex-row items-center justify-center pt-8 pb-8">
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
        <div className="flex justify-center mt-8 space-x-6">
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
        <p className="mt-8 text-base leading-6 text-center text-neutral pb-10">
          Copyright © 2024 Express Tool Hire Ltd
        </p>
      </div>
    </>
  );
};
export default HomePage;
