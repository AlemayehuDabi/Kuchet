import { signIn, signOut } from '@/auth';
import { signInSchemaWithCredintial } from '../validator';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const SignInWithCredintial = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = signInSchemaWithCredintial.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'successfully signed in' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'invalid credintial' };
  }
};

export const SignOut = async () => {
  await signOut();
};
