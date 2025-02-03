import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-white border-t '>
      <div className=' px-4 sm:px-6 lg:px-8 py-12 flex flex-col  items-center sm:flex-row sm:justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4 text-center sm:text-left'>
              Kuri
            </h3>
            <p className='text-gray-600 '>
              Ethiopia's first lactation support platform
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-center sm:text-left'>
              Quick Links
            </h4>
            <ul className='space-y-2 text-center sm:text-left'>
              <li>
                <Link
                  to='/About'
                  className='text-gray-600 hover:text-gray-900'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/our-products'
                  className='text-gray-600 hover:text-gray-900'>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to='/blogs'
                  className='text-gray-600 hover:text-gray-900'>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/contact-us'
                  className='text-gray-600 hover:text-gray-900'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-center sm:text-left'>
              Contact
            </h4>
            <ul className='space-y-2 text-center sm:text-left'>
              <li className='text-gray-600'>Addis Ababa, Ethiopia</li>
              <li className='text-gray-600'>info@kurihealth.com</li>
              <li className='text-gray-600'>+251 911 123 456</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4 text-center sm:text-left'>
              Follow Us
            </h4>
            <div className='flex space-x-4 justify-center sm:justify-start'>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900 '>
                <Facebook className='h-6 w-6 ' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900'>
                <Instagram className='h-6 w-6' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-900'>
                <Twitter className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8 flex items-center justify-center border-t text-center text-gray-600  '>
        <p>&copy; 2025 Kuri Mother's Health Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
