
export enum Platform {
  FACEBOOK = 'Facebook',
  TIKTOK = 'TikTok',
  INSTAGRAM = 'Instagram'
}

export enum Category {
  BEAUTY = 'جمال وعناية',
  ELECTRONICS = 'إلكترونيات',
  HOME = 'منزل ومطبخ',
  HEALTH = 'صحة ولياقة',
  TOYS = 'ألعاب أطفال'
}

export interface Product {
  id: string;
  name: string;
  image: string;
  platform: Platform;
  category: Category;
  country: string;
  views: number;
  likes: number;
  shares: number;
  price: number;
  growth: number;
  createdAt: string;
}

export interface SeasonalTrend {
  id: string;
  title: string;
  date: string;
  description: string;
  recommendedCategories: Category[];
  icon: string;
}
