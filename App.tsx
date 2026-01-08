
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AdDiscovery from './components/AdDiscovery';
import SeasonalTrends from './components/SeasonalTrends';
import { Bell, User, Search as SearchIcon } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'discovery':
        return <AdDiscovery />;
      case 'seasonal':
        return <SeasonalTrends />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
            <div className="p-4 bg-gray-100 rounded-full text-gray-400">
              <SearchIcon size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-700">هذه الصفحة قيد التطوير</h2>
            <p className="text-gray-500">قريباً سنقوم بإطلاق ميزة {activeTab}</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir="rtl">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-30 flex-shrink-0">
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="ابحث بسرعة عن أي منتج..."
                className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 mr-auto">
            <button className="p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>
            <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900">أحمد محمد</p>
                <p className="text-[10px] text-indigo-600 font-medium">حساب احترافي Pro</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 overflow-hidden">
                <User size={22} />
              </div>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
          
          <footer className="mt-16 py-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-medium">
            <p>© 2023 Minea AR - جميع الحقوق محفوظة</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-indigo-600">الشروط والأحكام</a>
              <a href="#" className="hover:text-indigo-600">سياسة الخصوصية</a>
              <a href="#" className="hover:text-indigo-600">تواصل معنا</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
