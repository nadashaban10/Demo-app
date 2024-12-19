import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../public/images/logo.jpg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 mx-8 bg-white text-black font-poppins" >
      <div className="flex items-center justify-between w-full sm:w-auto  mb-1 sm:mb-0">
        <img 
          src={logo}
          alt="Logo" 
          className="w-24 h-auto cursor-pointer"
        />
        <button className="ml-4 sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <span className="text-black text-2xl">&#x2715;</span>
          ) : (
            <span className="text-black text-2xl">&#9776;</span>
          )}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row  w-full sm:w-auto sm:space-x-8 mt-5 ">
        <ul className={`flex flex-col sm:flex-row font-semibold  space-y-2 sm:space-y-0 sm:space-x-[50px] text-xl ${isMenuOpen ? 'w-full text-center space-y-4 py-4 rounded-md text-2xl text-black' : 'hidden'} sm:flex`}>
          <li><a href="/shop" className="hover:text-red-500 pl-[50px]">الرئيسية</a></li>
          <li><a href="/categories" className="hover:text-red-500">المشاريع</a></li>
          <li><a href="/products" className="hover:text-red-500">خدماتنا</a></li>
          <li><a href="/about" className="hover:text-red-500">من نحن</a></li>
          <li><a href="/help" className="hover:text-red-500">اتصل بنا</a></li>
        </ul>
        <div className={`flex flex-col sm:flex-row items-center w-full sm:w-auto mt-4 sm:mt-0 sm:space-x-4 ${isMenuOpen ? '' : 'hidden'} sm:flex`}>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 ml-3">طلب عرض أسعار</button>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            تواصل عبر الواتساب
            <FaWhatsapp className="mr-2 text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
