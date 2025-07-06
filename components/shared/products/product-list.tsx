import sampleData, { SampleDataType } from '@/db/sample-data';
import { ProductCard } from './product-card';

export function ProductList() {
  const productsToDisplay = sampleData.products || [];

  const limit = 3;

  const limitedProductToDisplay = limit
    ? productsToDisplay.slice(0, limit)
    : [];
  return (
    <div>
      {limitedProductToDisplay.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {limitedProductToDisplay.map((product: SampleDataType) => (
            // Ensure product.slug is unique and stable for keys
            <ProductCard product={product} key={product.slug} limit={4} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">
          No new products available at the moment.
        </p>
      )}
    </div>
  );
}
