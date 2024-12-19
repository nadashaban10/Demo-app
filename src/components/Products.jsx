import React from 'react';
import image1 from "../../public/images/hiddenair.webp";
import image2 from "../../public/images/images.jpg";
import image3 from "../../public/images/images (1).jpg";

function Products() {
  return (
    <div>
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-6 w-[93%]">
          <h2 className="text-4xl font-bold text-center mb-8 text-red-500">لماذا نحن الافضل؟</h2>
          <p className="text-center text-gray-600 mb-8 text-xl">
    نِفال للتكييف تقدم لكم أحدث الحلول في أنظمة التكييف المتقدمة، والتي تتميز بالكفاءة العالية والأداء الاستثنائي. نحن نقدم مجموعة متنوعة من الأنظمة المصممة خصيصاً لتلبية احتياجات كل عميل، بدءاً من التكييف المخفي الذي يضيف لمسة من الجمال والراحة إلى المساحات الداخلية، وصولاً إلى التكييف المركزي الذي يناسب المباني الكبيرة ويوفر توزيعاً متساوياً للهواء. كما نوفر نظام VRF المبتكر الذي يسمح بالتحكم المستقل في درجات الحرارة لجميع الغرف بشكل فردي. سواء كنت تبحث عن الحل المثالي لمنازل أو شركات أو مشاريع كبيرة، فإننا نلتزم بتقديم أفضل الحلول التي تحقق الراحة والفعالية، بالإضافة إلى تقديم الدعم المستمر لضمان سير العمل بكفاءة.
  </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
              <img src={image1} alt="Hidden AC" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">التكييف المخفي</h3>
              <p className="text-gray-600 mb-4 flex-grow">نظام تكييف مخفي يوفر الراحة التامة بأقل مستوى من الضوضاء.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-auto">اقرأ المزيد</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
              <img src={image2} alt="Central AC" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">التكييف المركزي</h3>
              <p className="text-gray-600 mb-4 flex-grow">نظام مناسب للمباني الكبيرة والشركات، يوفر توزيع هواء متساوٍ في جميع الأنحاء.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-auto">اقرأ المزيد</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
              <img src={image3} alt="VRF System" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">نظام VRF</h3>
              <p className="text-gray-600 mb-4 flex-grow">نظام متميز يوفر التحكم المستقل في درجات الحرارة للمساحات المختلفة.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-auto">اقرأ المزيد</a>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col">
              <img src={image1} alt="Hidden AC" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">التكييف المخفي</h3>
              <p className="text-gray-600 mb-4 flex-grow">نظام تكييف مخفي يوفر الراحة التامة بأقل مستوى من الضوضاء.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mt-auto">اقرأ المزيد</a>
            </div>
            
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
