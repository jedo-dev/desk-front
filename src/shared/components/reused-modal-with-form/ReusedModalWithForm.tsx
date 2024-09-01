import { IReusedModalWithForm } from './model/reused-modal-with-form.model';
import { setOpen } from './slice/reused-modal-with-form-slice';
import { resetFormItems } from '../reused-form/slice/reused-form-slice';
import { Form, Modal } from 'antd';

import { ReusedForm } from '../reused-form/ReusedForm';
import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';

export const ReusedModalWithForm: React.FC<IReusedModalWithForm> = (props) => {
  const dispatch = useAppDispatch();
  const { openModal } = useAppSelector((state) => state.reusedModalWithFormReducer);
  const [form] = Form.useForm();

  return (
    <Modal
      data-testid={props.dataTestid}
      title={props.title || 'Редактирование элемента справочника'}
      open={openModal}
      okText={props.okText || 'Сохранить'}
      cancelText={props.cancelText || 'Отмена'}
      onOk={() => form.submit()}
      onCancel={() => {
        dispatch(setOpen(false));
        dispatch(resetFormItems());
        form.resetFields();
      }}
      width={500}>
      <ReusedForm
        onFinishForm={props.onFinishForm}
        form={form}
        flexProps={props.antFormFlexProps}
      />
    </Modal>
  );
};
