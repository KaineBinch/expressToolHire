import Slider from "../components/slider";

const HomePage = () => {
  return (
    <>
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
      <div className="min-h-[80svh] bg-accent md:flex md:flex-col md:max-w-7xl">
        <div className="bg-accent pt-[40px]">
          <h1 className="text-3xl text-left ml-[10px] font-[ArialBlack] ">
            Wide Selection of Quality Tools at Competitive Prices
          </h1>
          <p className="py-6 text-left mx-[10px]">
            At Express Tool Hire Ltd, we offer a wide range of high-quality
            tools and equipment for all your construction needs. With our
            competitive pricing, you can get the tools you need without breaking
            the bank.
          </p>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="text-left ml-[10px]">
            <h3 className="font-[arialBlack] text-xl">Wide Selection</h3>
            <p className="text-left mt-[5px]">
              Choose from a wide and extensive range of tools and equipment to
              perfectly suit and cater to your specific and unique requirements
              and needs.
            </p>
          </div>
          <div className="text-left ml-[10px] mt-[20px]">
            <h3 className="font-[arialBlack] text-xl">Quality Tools</h3>
            <p className="text-left mt-[5px]">
              Our tools are of the highest quality, ensuring reliable
              performance and durability.
            </p>
          </div>
        </div>
        <div className="flex flex-1 ml-[10px] mt-[25px]">
          <a href="/#/about" className="btn btn-secondary text-white">
            Learn More
          </a>
          <a href="/#/contact" className="flex items-center pl-4">
            Contact us {">"}
          </a>
        </div>
      </div>

      <div></div>
    </>
  );
};
export default HomePage;
