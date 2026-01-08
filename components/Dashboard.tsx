
import React from 'react';
import { MOCK_PRODUCTS } from '../data';
import ProductCard from './ProductCard';
import { TrendingUp, Users, Eye, BarChart3, ArrowUpRight, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'السبت', value: 400 },
  { name: 'الأحد', value: 300 },
  { name: 'الاثنين', value: 600 },
  { name: 'الثلاثاء', value: 800 },
  { name: 'الأربعاء', value: 500 },
  { name: 'الخميس', value: 900 },
  { name: 'الجمعة', value: 1100 },
];

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, growth: string, isPositive: boolean }> = ({ title, value, icon, growth, isPositive }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <ArrowUpRight size={14} />
        {growth}
      </div>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-extrabold text-gray-900 mt-1">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">نظرة عامة</h1>
        <p className="text-gray-500 mt-1">مرحباً بك مجدداً، إليك ما يحدث في السوق اليوم</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="الإعلانات المكتشفة" 
          value="1,450,230" 
          icon={<Zap size={20} />} 
          growth="12.5%" 
          isPositive={true} 
        />
        <StatCard 
          title="المنتجات الرائجة اليوم" 
          value="842" 
          icon={<TrendingUp size={20} />} 
          growth="24.1%" 
          isPositive={true} 
        />
        <StatCard 
          title="مشاهدات السوق" 
          value="45.2M" 
          icon={<Eye size={20} />} 
          growth="8.4%" 
          isPositive={true} 
        />
        <StatCard 
          title="عدد المعلنين النشطين" 
          value="12,400" 
          icon={<Users size={20} />} 
          growth="2.3%" 
          isPositive={false} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <BarChart3 className="text-indigo-600" />
              نمو السوق الأسبوعي
            </h3>
            <select className="bg-gray-50 border-none text-xs font-bold py-1 px-3 rounded-lg outline-none">
              <option>آخر 7 أيام</option>
              <option>آخر 30 يوم</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Platforms Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-lg mb-6">المنصات الأكثر نشاطاً</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                <span className="text-[10px] font-black">TikTok</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold">تيك توك</span>
                  <span className="text-gray-500">45%</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-black" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <span className="text-[10px] font-black">FB</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold">فيسبوك</span>
                  <span className="text-gray-500">30%</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: '30%' }} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <span className="text-[10px] font-black">IG</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold">إنستقرام</span>
                  <span className="text-gray-500">25%</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500" style={{ width: '25%' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <button className="text-indigo-600 font-bold text-sm hover:underline">
              عرض تحليل المنصات بالتفصيل
            </button>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">المنتجات الرائجة الآن 🔥</h2>
          <button className="text-indigo-600 font-bold text-sm hover:underline">عرض الكل</button>
        </div>
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
