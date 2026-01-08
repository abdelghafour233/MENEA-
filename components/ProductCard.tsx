
import React from 'react';
import { Product, Platform } from '../types';
import { Eye, Heart, Share2, TrendingUp, DollarSign } from 'lucide-react';

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
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold ${getPlatformColor(product.platform)}`}>
          {product.platform}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-gray-700 shadow-sm">
          {product.country}
        </div>
        <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
          <TrendingUp size={12} />
          %{product.growth}+
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-50 mt-auto">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-[10px] mb-1">مشاهدات</span>
            <div className="flex items-center gap-1 text-gray-700 font-bold text-xs">
              <Eye size={12} className="text-gray-400" />
              {formatNumber(product.views)}
            </div>
          </div>
          <div className="flex flex-col items-center border-x border-gray-50">
            <span className="text-gray-400 text-[10px] mb-1">إعجابات</span>
            <div className="flex items-center gap-1 text-gray-700 font-bold text-xs">
              <Heart size={12} className="text-gray-400" />
              {formatNumber(product.likes)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-[10px] mb-1">مشاركات</span>
            <div className="flex items-center gap-1 text-gray-700 font-bold text-xs">
              <Share2 size={12} className="text-gray-400" />
              {formatNumber(product.shares)}
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-xs">السعر:</span>
            <span className="text-indigo-600 font-extrabold text-lg">{product.price}</span>
            <span className="text-gray-500 text-[10px]">SAR</span>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-600 transition-colors">
            تحليل المنتج
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
