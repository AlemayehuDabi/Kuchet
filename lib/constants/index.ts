export const APP_TITLE = process.env.NEXT_PUBLIC_APP_TITLE || 'Kuchet';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Modern Ecommerce Website';
export const SERVER_URL =
  process.env.NEXT_SERVER_URL || 'http://localhost:3000';

export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCT_LIMIT) || 4;

export const signInDefaultValues = {
  email: '',
  password: '',
};
