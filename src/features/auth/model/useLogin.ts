import { useLoginUserMutation } from '@entities';
import { message } from 'antd';
import { LoginFormValues } from './types';

export const useLogin = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onLogin = async (values: LoginFormValues) => {
    try {
      const response = await loginUser(values)
        .unwrap()
        .then((res) => {
          localStorage.setItem('access_token', res.access_token);
        });
      message.success('Login successful!');
      return true;
    } catch (error) {
      message.error('Login failed!');
      return false;
    }
  };

  return { onLogin, isLoading };
};
