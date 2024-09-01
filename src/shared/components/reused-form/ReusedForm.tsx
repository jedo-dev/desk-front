import { Flex, Form, FormProps, message } from 'antd';
import { useEffect } from 'react';
import { IReusedForm } from './model/reused-form.model';

import { useAppSelector } from '@app/store/hooks/redux';
import CreateNodeElements from './lib/CreateNodeElements';

export const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
  if (errorInfo.errorFields.length > 0) {
    message.error('Заполните обязательные поля');
  }
  console.error('Ошибка сохранения формы: ', errorInfo);
  return errorInfo.values;
};

export const ReusedForm: React.FC<IReusedForm> = (props) => {
  const { formItems } = useAppSelector((state) => state.reusedFormReducer);

  useEffect(() => {
    formItems.forEach((element) => {
      props.form.setFieldsValue({
        [`${element.formItemProps?.mainProps.name}`]: element.formItemProps?.mainProps.value,
      });
    });
  }, [formItems]);

  return (
    <Form
      key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
      form={props.form}
      labelWrap={true}
      colon={false}
      size={'middle'}
      layout={'vertical'}
      labelAlign={'left'}
      onFinish={props.onFinishForm}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
      {...props.antFormProps}>
      <Flex
        gap={props.flexProps?.gap || 'middle'}
        wrap={props.flexProps?.wrap || 'wrap'}
        {...props.flexProps}>
        {formItems?.map((formItem) => (
          <Form.Item
            key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
            style={{ margin: 0, ...formItem.formItemProps.style }}
            {...formItem.formItemProps.mainProps}>
            {CreateNodeElements(formItem)}
          </Form.Item>
        ))}
      </Flex>
    </Form>
  );
};
