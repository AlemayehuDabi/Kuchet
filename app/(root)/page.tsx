import { ProductList } from '@/components/shared/products/product-list';

// You might want to define some metadata for SEO if this is a page file
export const metadata = {
  title: 'New Arrivals | My Store',
  description: 'Discover the newest products in our collection.',
};

const HomePage = () => {
  return (
    <div className="flex flex-col py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-8 mt-4">
        Newest Arrivals
      </h1>

      <ProductList />
    </div>
  );
};

export default HomePage;
