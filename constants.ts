import { Droplets, Zap, Candy, Truck, Info, Phone } from 'lucide-react';

export const BUSINESS_NAME = "Shamshad Shops";
export const PHONE_NUMBER = "9370262177";
export const PHONE_DISPLAY = "+91 9370262177";
export const EMAIL = "xyz@abc.com";
export const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}`;

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Water Bottles', path: '/water-bottles' },
  { label: 'Energy Drinks', path: '/energy-drinks' },
  { label: 'Chocolates', path: '/chocolates-lollipops' },
  { label: 'Bulk Orders', path: '/bulk-orders' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CATEGORIES = [
  {
    id: 'water',
    title: 'Water Bottles',
    path: '/water-bottles',
    icon: Droplets,
    description: '250ml, 500ml, 1L options available.',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?fm=jpg'
  },
  {
    id: 'energy',
    title: 'Energy Drinks',
    path: '/energy-drinks',
    icon: Zap,
    description: 'Red Bull, Hell, Power Water.',
    image: 'https://images.unsplash.com/photo-1570526427001-9d80d114054d?fm=jpg'
  },
  {
    id: 'candy',
    title: 'Chocolates & Lollipops',
    path: '/chocolates-lollipops',
    icon: Candy,
    description: 'Sweet treats for kids and gifts.',
    image: 'https://images.unsplash.com/photo-1623660053975-cf75a8be0908?fm=jpg'
  }
];