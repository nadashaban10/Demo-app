import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../public/images/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="نفال للتكييف" className="w-[110px] h-auto cursor-pointer mb-3 " />
          
         
          <div className="flex space-x-4 text-white justify-start items-center">
            <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600 ml-3" />
          
            <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
            <FaWhatsapp className="text-3xl cursor-pointer hover:text-green-500" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>التكييف المخفي</li>
            <li>التكييف المركزي</li>
            <li>نظام VRF</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">معلومات عنا</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>عن نفال</li>
            <li>مشاريعنا</li>
            <li>المدونة</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">اتصل بنا</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>طلب عرض أسعار</li>
            <li>التواصل عبر واتساب</li>
            <li>استفسارات</li>
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-1 w-[40px] bg-gray-500 text-white font-bold rounded-full hover:bg-gray-300"
        >
          &#8679;
        </button>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-5 text-[12px] text-gray-400">
        <p>&copy; جميع الحقوق محفوظة لشركة نفال للتكييف 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
