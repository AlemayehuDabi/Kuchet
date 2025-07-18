import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2);
  // Get the int/float
  const [intValue, floatValue] = stringValue.split('.');

  return (
    <p className={cn('text-sm', className)}>
      <span className="text-green-500">ETB</span>{' '}
      <span className="font-semibold text-blue-950">
        {' '}
        {intValue}.{floatValue}
      </span>
    </p>
  );
};

export default ProductPrice;
