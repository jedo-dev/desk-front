import { FormProps } from 'antd';

export interface IReusedModalWithForm {
  dataTestid?: string;
  title?: string;
  // open: boolean;
  okText?: string;
  cancelText?: string;
  width?: number;
  onFinishForm: FormProps['onFinish'];
  antFormFlexProps?: {
    vertical?: boolean;
    gap?: 'small' | 'middle' | 'large';
    wrap?: React.CSSProperties['flexWrap'];
  };
}
