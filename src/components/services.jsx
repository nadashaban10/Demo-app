import { FaTools, FaShieldAlt, FaCalculator, FaDollarSign, FaEye, FaCheck } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-6 py-12  w-[93%]">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-500">خدماتنا المتميزة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: خبرة */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaTools className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">الخبرة</h3>
          <p className="text-gray-600">خبراء في مقاولات التكييف منذ 30 عاما، نلتزم بتطبيق معايير الجودة والمواصفات الفنية.</p>
        </div>

        {/* Card 2: ضمان */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaShieldAlt className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">الضمان</h3>
          <p className="text-gray-600">اسم نفال مطابق للجودة والالتزام، تضمن نفال أعمال التكييف ضد أي عيوب أو أخطاء إن وجدت.</p>
        </div>

        {/* Card 3: دقة */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaCalculator className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">الدقة</h3>
          <p className="text-gray-600">يتم حساب السعة التبريدية بحسب الظروف المتغيرة لكل مشروع وبأحدث البرامج المتخصصة.</p>
        </div>

        {/* Card 4: أسعار */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaDollarSign className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">الأسعار</h3>
          <p className="text-gray-600">نقدم أسعار تبنى على القيمة والاحتياج الفعلي بالخامات المعتمدة، بدون مصاريف إضافية.</p>
        </div>

        {/* Card 5: وضوح */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaEye className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">الوضوح</h3>
          <p className="text-gray-600">لا نحاول أن نبيعك ماركة معينة، نعرض لك التكييف الأنسب والأفضل حسب مشروعك.</p>
        </div>

        {/* Card 6: معتمد */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-300 hover:text-white transition-colors duration-300 flex flex-col justify-center items-center">
          <FaCheck className="text-4xl mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">معتمد</h3>
          <p className="text-gray-600">نفال موزع معتمد لماركات التكييف بالمملكة مثل “ترين، فوجي، دايكن، جري، كارير، ال جي، وغيرهم”.</p>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
