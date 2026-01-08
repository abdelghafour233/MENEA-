
import React from 'react';
import { SEASONAL_TRENDS } from '../data';
import { Calendar, ArrowLeft, Star, ShoppingBag, Sparkles } from 'lucide-react';

const SeasonalTrends: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">المناسبات والترندات الموسمية</h1>
        <p className="text-gray-500 mt-1">خطط لحملاتك القادمة بناءً على الأحداث الأكثر تأثيراً في المنطقة</p>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <div className="bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-bold mb-4 flex items-center gap-2">
            <Sparkles size={14} />
            تحديث مباشر
          </div>
          <h2 className="text-4xl font-extrabold mb-4">الاستعداد لرمضان 2024</h2>
          <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
            تشير البيانات التاريخية إلى زيادة بنسبة 300% في البحث عن منتجات المنزل والهدايا قبل 3 أسابيع من بداية الشهر الكريم.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2">
            استعراض منتجات رمضان
            <ArrowLeft size={18} />
          </button>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-10 right-1/4 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl opacity-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: List of Events */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Calendar className="text-indigo-600" />
            جدول المناسبات القادمة
          </h3>
          
          <div className="space-y-4">
            {SEASONAL_TRENDS.map((trend) => (
              <div key={trend.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 transition-all group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-indigo-50 transition-colors">
                      {trend.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{trend.title}</h4>
                      <p className="text-indigo-600 text-sm font-semibold">{trend.date}</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium">متبقي 45 يوم</div>
                </div>
                <p className="text-gray-500 mt-4 text-sm leading-relaxed">{trend.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {trend.recommendedCategories.map((cat) => (
                    <span key={cat} className="bg-gray-50 text-gray-600 text-[10px] font-bold px-2 py-1 rounded border border-gray-100">
                      #{cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Tips & Recommendations */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Star className="text-yellow-500" fill="currentColor" />
            توصيات الخبراء للموسم
          </h3>
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShoppingBag size={20} />
                </div>
                <h4 className="font-bold">أفضل المنتجات مبيعاً حالياً</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">منظفات الوجه الكهربائية</span>
                  <span className="text-green-600 font-bold">+120% نمو</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">أدوات إضاءة الفيديو</span>
                  <span className="text-green-600 font-bold">+85% نمو</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">مباخر السفر الذكية</span>
                  <span className="text-green-600 font-bold">+64% نمو</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-indigo-50/30">
              <h4 className="font-bold text-sm mb-3">نصيحة تسويقية:</h4>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "خلال المواسم، يفضل المستهلك العربي الرسائل التي تركز على العائلة، المشاركة، والجودة. استخدم المحتوى الذي يعكس هذه القيم لزيادة معدلات التحويل بنسبة تصل إلى 2.5x."
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold mb-4">أفضل الدول استهدافاً هذا الشهر</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🇸🇦</span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">السعودية</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🇦🇪</span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">الإمارات</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600" style={{ width: '82%' }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🇰🇼</span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">الكويت</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalTrends;
