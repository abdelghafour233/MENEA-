
import React from 'react';
import { SEASONAL_TRENDS } from '../data.ts';
import { Calendar, ArrowLeft, Star, ShoppingBag, Sparkles } from 'lucide-react';

const SeasonalTrends: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 text-white">
        <h2 className="text-4xl font-extrabold mb-4">الاستعداد لرمضان 2024</h2>
        <p className="text-indigo-100 text-lg mb-6">تشير البيانات التاريخية إلى زيادة بنسبة 300% في البحث عن منتجات المنزل قبل رمضان.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {SEASONAL_TRENDS.map((trend) => (
            <div key={trend.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{trend.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{trend.title}</h4>
                  <p className="text-indigo-600 text-sm">{trend.date}</p>
                </div>
              </div>
              <p className="text-gray-500 mt-4 text-sm">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalTrends;
