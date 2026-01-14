import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: 'water' | 'energy' | 'candy';
  features?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}