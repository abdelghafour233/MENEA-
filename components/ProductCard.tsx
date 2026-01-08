
import React from 'react';
import { Product, Platform } from '../types.ts';
import { Eye, Heart, Share2, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getPlatformColor = (platform: Platform) => {
    switch (platform) {
      case Platform.FACEBOOK: return 'bg-blue-600';
      case Platform.TIKTOK: return 'bg-black';
      case Platform.INSTAGRAM: return 'bg-pink-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold ${getPlatformColor(product.platform)}`}>{product.platform}</div>
        <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">%{product.growth}+</div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-3 text-sm line-clamp-2">{product.name}</h3>
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-50 mt-auto text-center">
          <div><span className="text-gray-400 text-[10px]">مشاهدات</span><div className="text-xs font-bold">{formatNumber(product.views)}</div></div>
          <div><span className="text-gray-400 text-[10px]">إعجابات</span><div className="text-xs font-bold">{formatNumber(product.likes)}</div></div>
          <div><span className="text-gray-400 text-[10px]">مشاركات</span><div className="text-xs font-bold">{formatNumber(product.shares)}</div></div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-indigo-600 font-extrabold text-lg">{product.price} SAR</span>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-600 transition-colors">تحليل</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
