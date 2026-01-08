
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS, COUNTRIES } from '../data';
import { Platform, Category } from '../types';
import ProductCard from './ProductCard';
import { Filter, Search, ChevronDown, Calendar } from 'lucide-react';

const AdDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | 'all'>('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = selectedPlatform === 'all' || product.platform === selectedPlatform;
      const matchesCountry = selectedCountry === 'all' || product.country === selectedCountry;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesPlatform && matchesCountry && matchesCategory;
    });
  }, [searchTerm, selectedPlatform, selectedCountry, selectedCategory]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">اكتشاف الإعلانات</h1>
          <p className="text-gray-500 mt-1">ابحث في ملايين الإعلانات الرابحة عبر المنصات</p>
        </div>
        
        <div className="relative max-w-md w-full">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="ابحث عن منتج، علامة تجارية أو كلمة دلالية..."
            className="w-full pr-12 pl-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-gray-500 ml-4 font-bold border-l border-gray-100 pl-4">
          <Filter size={18} />
          <span>تصفية:</span>
        </div>

        {/* Platform Filter */}
        <select 
          className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value as any)}
        >
          <option value="all">جميع المنصات</option>
          <option value={Platform.FACEBOOK}>فيسبوك</option>
          <option value={Platform.TIKTOK}>تيك توك</option>
          <option value={Platform.INSTAGRAM}>إنستقرام</option>
        </select>

        {/* Country Filter */}
        <select 
          className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="all">جميع الدول</option>
          {COUNTRIES.map(c => (
            <option key={c.code} value={c.name}>{c.name}</option>
          ))}
        </select>

        {/* Category Filter */}
        <select 
          className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as any)}
        >
          <option value="all">جميع التصنيفات</option>
          {Object.values(Category).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Date Filter (Simplified) */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer hover:bg-gray-100">
          <Calendar size={16} />
          <span>آخر 30 يوم</span>
          <ChevronDown size={14} />
        </div>

        <button 
          onClick={() => {
            setSearchTerm('');
            setSelectedPlatform('all');
            setSelectedCountry('all');
            setSelectedCategory('all');
          }}
          className="mr-auto text-sm text-red-500 hover:underline"
        >
          إعادة تعيين
        </button>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          تم العثور على <span className="font-bold text-gray-900">{filteredProducts.length}</span> إعلان رائج
        </p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">ترتيب حسب:</span>
          <select className="font-bold text-gray-700 bg-transparent outline-none">
            <option>الأحدث</option>
            <option>الأكثر مشاهدة</option>
            <option>الأعلى نمواً</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center border border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
            <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">لا توجد نتائج</h3>
          <p className="text-gray-500 mt-2">حاول تغيير فلاتر البحث للعثور على ما تريد</p>
        </div>
      )}
    </div>
  );
};

export default AdDiscovery;
