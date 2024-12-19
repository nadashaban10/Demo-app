import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../public/images/HVAC-1024x512.jpg"; // Replace with relevant images
import image2 from "../../public/images/airconditionar.avif";
import image3 from "../../public/images/829f1f6.jpg";
import "../index.css";

function Header() {
  return (
    <div className="sm:mt-5 sm:mx-[65px]">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        showArrows={false}
        className="w-full"
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover"
            src={image1}
            alt="نفال للتكييف"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-center bg-black bg-opacity-50 text-white p-8 ">
            <h2 className="text-3xl md:text-5xl font-bold text-end">
              أهلاً بكم في نفال للتكييف
            </h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-end">
              نفال للتكييف تقدم خبرة واسعة وجودة عالية في تصميم وتركيب أنظمة التكييف. 
              نلتزم بتقديم حلول مبتكرة تناسب جميع احتياجات العملاء سواء للمشاريع السكنية 
              أو التجارية مع ضمان أعلى معايير الجودة والكفاءة.
            </p>
            <div className="mt-4 space-x-4 flex justify-end">
              <button className="bg-red-500 text-white px-4 py-2  hover:bg-red-600">
                تعرف علينا
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover l"
            src={image2}
            alt="خدمات نفال"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-center bg-black bg-opacity-50 text-white p-8 ">
            <h2 className="text-3xl md:text-5xl font-bold text-end">
              خدمات عالية الجودة
            </h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-end">
              بفضل فريقنا المتخصص، نقدم مجموعة متنوعة من خدمات التكييف التي تشمل التكييف المركزي،
              التكييف المخفي، ونظام VRF بأحدث التقنيات لتوفير بيئة مريحة وصحية.
            </p>
            <div className="mt-4 space-x-4 flex justify-end">
              <button className="bg-red-500 text-white px-4 py-2  hover:bg-red-600">
                طلب عرض أسعار
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            className="w-full h-[500px] object-cover "
            src={image3}
            alt="مشاريع نفال"
          />
          <div className="absolute inset-0 flex flex-col items-end justify-center bg-black bg-opacity-50 text-white p-8 ">
            <h2 className="text-3xl md:text-5xl font-bold text-end">
              مشاريعنا المتميزة
            </h2>
            <p className="mt-4 text-sm md:text-lg text-gray-300 w-full md:w-[60%] text-end">
              منذ تأسيسنا، نفخر بتقديم حلول مبتكرة وأنظمة تكييف متطورة للمشاريع السكنية 
              والتجارية. نجاحنا يعتمد على رضا عملائنا وثقتهم بخدماتنا المتميزة.
            </p>
            <div className="mt-4 space-x-4 flex justify-end">
              <button className="bg-red-500 text-white px-4 py-2  hover:bg-red-600">
             تصفح المشاريع
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Header;
