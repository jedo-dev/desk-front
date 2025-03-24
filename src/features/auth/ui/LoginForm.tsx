import { Button, Form, Input } from 'antd';
import React from 'react';
import { useLogin } from '../model/useLogin';
interface LoginFormProps {
  onSuccess: () => void;
}
export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { onLogin, isLoading } = useLogin();
  const handleFinish = async (values: { email: string; password: string }) => {
    const isSuccess = await onLogin(values);
    if (isSuccess) {
      onSuccess();
    }
  };
  return (
    <Form name='login_form' initialValues={{ remember: true }} onFinish={handleFinish}>
      <Form.Item name='email' rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder='Password' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
