
import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  Settings, 
  TrendingUp, 
  Heart,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: LayoutDashboard },
    { id: 'discovery', label: 'اكتشاف الإعلانات', icon: Search },
    { id: 'seasonal', label: 'الترندات الموسمية', icon: Calendar },
    { id: 'favorites', label: 'المفضلة', icon: Heart },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-white rounded-lg shadow-md">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      <aside className={`
        fixed top-0 bottom-0 right-0 z-40 w-64 bg-white border-l border-gray-100 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0 lg:static lg:flex lg:flex-col
      `}>
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">M</div>
          <span className="text-xl font-bold text-gray-900">Minea AR</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
              className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <item.icon size={20} />
              <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-50">
           <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl">
             <Settings size={20} />
             <span className="font-bold text-sm">الإعدادات</span>
           </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
