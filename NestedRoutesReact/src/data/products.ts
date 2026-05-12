import type { MenProduct } from '../types/MenProduct';
import type { WomenProduct } from '../types/WomenProduct';

export const menProducts: MenProduct[] = [
  {
    id: 'm1',
    name: 'Vintage Denim Jacket',
    price: 89.99,
    description: 'A classic denim jacket with a vintage wash. Perfect for layering.',
    category: 'Outerwear',
    image: '/images/mens_jacket.png',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'm2',
    name: 'Premium Leather Boots',
    price: 149.99,
    description: 'Handcrafted leather boots designed for both comfort and style.',
    category: 'Footwear',
    image: '/images/mens_boots.png',
    sizes: ['8', '9', '10', '11']
  }
];

export const womenProducts: WomenProduct[] = [
  {
    id: 'w1',
    name: 'Floral Summer Dress',
    price: 59.99,
    description: 'Lightweight and breathable floral dress for those warm sunny days.',
    category: 'Dresses',
    image: '/images/womens_dress.png',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'w2',
    name: 'Designer Leather Handbag',
    price: 199.99,
    description: 'Elegant leather handbag with golden hardware. A true statement piece.',
    category: 'Accessories',
    image: '/images/womens_handbag.png',
    sizes: ['One Size']
  }
];
