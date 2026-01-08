
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS, COUNTRIES } from '../data.ts';
import { Platform, Category } from '../types.ts';
import ProductCard from './ProductCard.tsx';
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">اكتشاف الإعلانات</h1>
        </div>
        <div className="relative max-w-md w-full">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="ابحث..." className="w-full pr-12 pl-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none shadow-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-4 items-center">
        <select className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm" value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value as any)}>
          <option value="all">جميع المنصات</option>
          <option value={Platform.FACEBOOK}>فيسبوك</option>
          <option value={Platform.TIKTOK}>تيك توك</option>
          <option value={Platform.INSTAGRAM}>إنستقرام</option>
        </select>
        <select className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="all">جميع الدول</option>
          {COUNTRIES.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default AdDiscovery;
