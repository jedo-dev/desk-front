import { useGetCurrentUserQuery } from '@entities';
import { skipToken } from '@reduxjs/toolkit/query';
import { Modal } from '@shared/ui/Modal';
import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';

export const LoginButton: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Хук для получения данных текущего пользователя
  const token = localStorage.getItem('access_token');
  const { data, error } = useGetCurrentUserQuery(token ? undefined : skipToken);

  // Проверка авторизации при монтировании компонента
  useEffect(() => {
    if (data) {
      setIsLoggedIn(true);
    } else if (error) {
      setIsLoggedIn(false);
    }
  }, [data, error]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSuccess = () => {
    setIsModalVisible(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    message.success('Вы вышли из системы.');
  };

  return (
    <>
      {isLoggedIn ? (
        <Button type='primary' onClick={handleLogout}>
          Выйти
        </Button>
      ) : (
        <>
          <Button type='primary' onClick={showModal}>
            Войти
          </Button>
          <Modal title='Вход' visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <LoginForm onSuccess={handleSuccess} />
          </Modal>
        </>
      )}
    </>
  );
};
