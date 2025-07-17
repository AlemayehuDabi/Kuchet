import { ProductList } from '@/components/shared/products/product-list';
import { GetLastestProduct } from '@/lib/actions/product.action';

// You might want to define some metadata for SEO if this is a page file
export const metadata = {
  title: 'New Arrivals | My Store',
  description: 'Discover the newest products in our collection.',
};

const HomePage = async () => {
  const latestProducts = await GetLastestProduct();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
