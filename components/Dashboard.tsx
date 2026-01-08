
import React from 'react';
import { MOCK_PRODUCTS } from '../data.ts';
import ProductCard from './ProductCard.tsx';
import { TrendingUp, Users, Eye, BarChart3, ArrowUpRight, Zap } from 'lucide-react';

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, growth: string, isPositive: boolean }> = ({ title, value, icon, growth, isPositive }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">{icon}</div>
      <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <ArrowUpRight size={14} /> {growth}
      </div>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-extrabold text-gray-900 mt-1">{value}</p>
  </div>
);

const CustomChart = () => (
  <div className="w-full h-48 flex items-end gap-2 px-2">
    {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
        <div 
          className="w-full bg-indigo-100 group-hover:bg-indigo-500 transition-all rounded-t-lg relative" 
          style={{ height: `${height}%` }}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {height}%
          </div>
        </div>
        <span className="text-[10px] text-gray-400 font-bold">
          {['سبت', 'أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة'][i]}
        </span>
      </div>
    ))}
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">نظرة عامة</h1>
        <p className="text-gray-500 mt-1">مرحباً بك مجدداً في لوحة تحكم Minea AR</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="الإعلانات المكتشفة" value="1.4M" icon={<Zap size={20} />} growth="12.5%" isPositive={true} />
        <StatCard title="المنتجات الرائجة" value="842" icon={<TrendingUp size={20} />} growth="24.1%" isPositive={true} />
        <StatCard title="مشاهدات السوق" value="45.2M" icon={<Eye size={20} />} growth="8.4%" isPositive={true} />
        <StatCard title="المعلنون" value="12.4K" icon={<Users size={20} />} growth="2.3%" isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-8 flex items-center gap-2">
            <BarChart3 className="text-indigo-600" />
            نمو السوق الأسبوعي
          </h3>
          <CustomChart />
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-6">أداء المنصات</h3>
          <div className="space-y-6">
            {[
              { label: 'TikTok', color: 'bg-black', val: 85 },
              { label: 'Facebook', color: 'bg-blue-600', val: 65 },
              { label: 'Instagram', color: 'bg-pink-600', val: 45 }
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold">{p.label}</span>
                  <span className="text-gray-500">%{p.val}</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className={`${p.color} h-full`} style={{ width: `${p.val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">المنتجات الرائجة الآن 🔥</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
