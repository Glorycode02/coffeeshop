
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-20 bg-[#48281A] flex justify-between items-center px-6 bottom-0 fixed text-white text-sm">
      {/* Left Section - Contact Info */}
      <div className="flex flex-col">
        <p className="font-semibold">Coffee Haven</p>
        <p>123 Coffee Street, Brewtown</p>
        <p>Open Daily: 8 AM - 8 PM</p>
      </div>

      {/* Center Section - Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={20} className="hover:text-[#ffcb77]" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} className="hover:text-[#ffcb77]" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} className="hover:text-[#ffcb77]" />
        </a>
      </div>

      {/* Right Section - Links */}
      <div className="flex flex-col">
        <a href="/menu" className="hover:text-[#ffcb77]">Menu</a>
        <a href="/about" className="hover:text-[#ffcb77]">About Us</a>
        <a href="/contact" className="hover:text-[#ffcb77]">Contact</a>
      </div>
    </div>
  );
}

export default Footer;
