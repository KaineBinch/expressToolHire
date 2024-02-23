import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
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
      <FontAwesomeIcon className="w-6 h-6" icon="fa-brands fa-instagram" />
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
  </div>;
};
export default Socials;
