'use server';

import { signIn, signOut } from '@/auth';
import {
  signInSchemaWithCredintial,
  signUpSchemaWithCredintial,
} from '../validator';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/prisma';

// sign-in
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

// sign-out
export const SignOut = async () => {
  await signOut();
};

//sign up
export const SignUp = async (prevState: unknown, formData: FormData) => {
  try {
    const user = signUpSchemaWithCredintial.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn('credentials', {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'user can NOT register' };
  }
};
