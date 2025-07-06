export type SampleDataType = {
  name: string;
  slug: string;
  category: string;
  description?: string; // Optional string
  images: string[]; // Corrected: Array of strings
  price: number;
  brand?: string; // Optional string
  rating: number;
  numReviews: number;
  stock?: number; // Optional number
  isFeatured?: boolean; // Optional boolean
  banner: string | null; // Corrected: string or null
};

const sampleData = {
  products: [
    {
      name: 'Polo Sporting',
      slug: 'polo-sporting-stretch-shirt',
      category: "Men's Dress Shirts",
      description: 'Classic Polo style with modern comfort',
      images: [
        '/images/products/HeadSet-1.jpg',
        '/images/products/HeadSet-2.jpg',
      ],
      price: 59.99,
      brand: 'Polo',
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: 'banner-1.jpg',
    },
    {
      name: 'Brooks Brothers Long ',
      slug: 'brooks-brothers-long-sleeved-shirt',
      category: "Men's Dress Shirts",
      description: 'Timeless style and premium comfort',
      images: ['/images/products/J-1.jpg', '/images/products/J-2.jpg'],
      price: 85.9,
      brand: 'Brooks Brothers',
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: 'banner-2.jpg',
    },
    {
      name: 'Tommy Hilfiger Classic',
      slug: 'tommy-hilfiger-classic-fit-dress-shirt',
      category: "Men's Dress Shirts",
      description: 'A perfect blend of sophistication and comfort',
      images: [
        '/images/products/makeup-1.jpg',
        '/images/products/makeup-2.jpg',
      ],
      price: 99.95,
      brand: 'Tommy Hilfiger',
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Calvin Klein Slim ',
      slug: 'calvin-klein-slim-fit-stretch-shirt',
      category: "Men's Dress Shirts",
      description: 'Streamlined design with flexible stretch fabric',
      images: ['/images/products/T-1.jpg', '/images/products/T-2.jpg'],
      price: 39.95,
      brand: 'Calvin Klein',
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Polo Ralph Lauren Oxford Shirt',
      slug: 'polo-ralph-lauren-oxford-shirt',
      category: "Men's Dress Shirts",
      description: 'Iconic Polo design with refined oxford fabric',
      images: ['/images/products/p5-1.jpg', '/images/products/p5-2.jpg'],
      price: 79.99,
      brand: 'Polo',
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Polo Classic Pink Hoodie',
      slug: 'polo-classic-pink-hoodie',
      category: "Men's Sweatshirts",
      description: 'Soft, stylish, and perfect for laid-back days',
      images: ['/images/products/T-3.jpg', '/images/products/T-2.jpg'],
      price: 99.99,
      brand: 'Polo',
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
    {
      name: 'Purse',
      slug: 'polo purse',
      category: 'women purse',
      description: 'Soft, stylish, and perfect for laid-back days',
      images: ['/images/products/Purse-2.jpg', '/images/products/Purse-1.jpg'],
      price: 99.99,
      brand: 'Polo',
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;
