import { FormInstance, FormProps, Rule } from 'antd/es/form';

export interface IFormItemsCaracteristic {
  mainProps: {
    name: string;
    label: string;
    value?: string | number | boolean | null | undefined;
    rules?: Rule[];
    valuePropName?: string;
  };
  style?: React.CSSProperties;
}

export type FieldType = {
  [key: string]: string | number | boolean | null | undefined;
};

export interface IReusedForm {
  antFormProps?: FormProps;
  title: string;
  flexProps?: {
    vertical?: boolean;
    gap?: 'small' | 'middle' | 'large';
    wrap?: React.CSSProperties['flexWrap'];
  };
  onFinishForm: FormProps['onFinish'];
  form: FormInstance;
}
