
import { Platform, Category, Product, SeasonalTrend } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ماكينة حلاقة احترافية لاسلكية',
    image: 'https://picsum.photos/seed/razor/400/300',
    platform: Platform.TIKTOK,
    category: Category.BEAUTY,
    country: 'السعودية',
    views: 1250000,
    likes: 45000,
    shares: 8000,
    price: 199,
    growth: 150,
    createdAt: '2023-10-01'
  },
  {
    id: '2',
    name: 'ساعة ذكية مقاومة للماء Pro 5',
    image: 'https://picsum.photos/seed/watch/400/300',
    platform: Platform.FACEBOOK,
    category: Category.ELECTRONICS,
    country: 'الإمارات',
    views: 850000,
    likes: 12000,
    shares: 2500,
    price: 350,
    growth: 85,
    createdAt: '2023-10-05'
  },
  {
    id: '3',
    name: 'مجموعة أدوات المطبخ السيليكون',
    image: 'https://picsum.photos/seed/kitchen/400/300',
    platform: Platform.INSTAGRAM,
    category: Category.HOME,
    country: 'مصر',
    views: 600000,
    likes: 32000,
    shares: 5000,
    price: 120,
    growth: 120,
    createdAt: '2023-10-10'
  },
  {
    id: '4',
    name: 'جهاز مساج الرقبة والكتفين',
    image: 'https://picsum.photos/seed/massage/400/300',
    platform: Platform.TIKTOK,
    category: Category.HEALTH,
    country: 'الكويت',
    views: 2100000,
    likes: 98000,
    shares: 15000,
    price: 145,
    growth: 210,
    createdAt: '2023-09-25'
  },
  {
    id: '5',
    name: 'مرطب شفاه بخلاصة الورد',
    image: 'https://picsum.photos/seed/lip/400/300',
    platform: Platform.INSTAGRAM,
    category: Category.BEAUTY,
    country: 'السعودية',
    views: 450000,
    likes: 21000,
    shares: 3000,
    price: 45,
    growth: 45,
    createdAt: '2023-10-12'
  },
  {
    id: '6',
    name: 'طائرة بدون طيار مع كاميرا 4K',
    image: 'https://picsum.photos/seed/drone/400/300',
    platform: Platform.FACEBOOK,
    category: Category.ELECTRONICS,
    country: 'عمان',
    views: 320000,
    likes: 8500,
    shares: 1200,
    price: 899,
    growth: 30,
    createdAt: '2023-10-15'
  }
];

export const SEASONAL_TRENDS: SeasonalTrend[] = [
  {
    id: 's1',
    title: 'تجهيزات رمضان 2024',
    date: 'مارس 2024',
    description: 'تركيز كبير على ديكورات المنزل، مستلزمات المطبخ، والملابس التقليدية.',
    recommendedCategories: [Category.HOME, Category.BEAUTY],
    icon: '🌙'
  },
  {
    id: 's2',
    title: 'الجمعة البيضاء',
    date: 'نوفمبر 2023',
    description: 'أكبر موسم تخفيضات في السنة. المنتجات الإلكترونية والجمال تتصدر المشهد.',
    recommendedCategories: [Category.ELECTRONICS, Category.BEAUTY, Category.HEALTH],
    icon: '🛍️'
  },
  {
    id: 's3',
    title: 'اليوم الوطني السعودي',
    date: '23 سبتمبر',
    description: 'منتجات مخصصة بالهوية الوطنية والاحتفالات.',
    recommendedCategories: [Category.TOYS, Category.HOME],
    icon: '🇸🇦'
  }
];

export const COUNTRIES = [
  { code: 'SA', name: 'السعودية' },
  { code: 'AE', name: 'الإمارات' },
  { code: 'EG', name: 'مصر' },
  { code: 'KW', name: 'الكويت' },
  { code: 'QA', name: 'قطر' },
  { code: 'OM', name: 'عمان' },
  { code: 'MA', name: 'المغرب' }
];
