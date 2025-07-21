import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert prisma object to json object
export function JsonObjectConverter<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// convert number into two decimal number
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.');

  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
};

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if (error.name === 'ZodError') {
    // Handle Zod error
    // const errorsObj = error.errors ?? {}; // fallback to empty object

    // const fieldErrors = Object.keys(errorsObj).map(
    //   (field) => errorsObj[field]?.message || 'Invalid value'
    // );

    // console.log('this is field error form zod', fieldErrors);

    // Using zod specific error 'issuse' not the 'errors' , zod have 'issues' array not 'errors'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldErrors = error.issues?.map((issue: any) => issue.message) || [];
    console.log('this is field error form zod', fieldErrors);

    return fieldErrors.join('. ');
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    // Handle Prisma error
    const field = error.meta?.target ? error.meta.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  } else {
    // Handle other errors
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message);
  }
}
