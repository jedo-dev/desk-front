import { Modal as AntdModal } from 'antd';
import React from 'react';

interface ModalProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ title, visible, onCancel, footer, children }) => {
  return (
    <AntdModal title={title} visible={visible} onCancel={onCancel} footer={footer}>
      {children}
    </AntdModal>
  );
};
