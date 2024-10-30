export interface Resource {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  category: 'E-Journals' | 'E-Books' | 'Research Databases' | 'Digital Collections' | 'Academic Tools' | 'Open Access';
  access?: 'Campus Only' | 'Open Access' | 'Subscription Required';
  provider?: string;
}