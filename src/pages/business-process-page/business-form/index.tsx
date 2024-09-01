import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';
import { BusinessProcessTransitionButton } from '@features';
import { BusinessProcessCardHeader, ReusedForm, setFormItems } from '@shared/components';
import { Button, Form } from 'antd';

export const BusinessForm = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const { openModal } = useAppSelector((state) => state.reusedModalWithFormReducer);
  const {
    actualRecord = {
      code_name: undefined,
      full_name: 123,
      description: undefined,
      is_active: false,
    },
  } = useAppSelector((state) => state.reusedTableReducer);

  const [form] = Form.useForm();
  dispatch(
    setFormItems([
      {
        type: 'inputTextArea',
        formItemProps: {
          mainProps: {
            name: 'code_name',
            label: 'Код реактора',
            value: actualRecord['code_name'],
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        },
      },
      {
        type: 'inputTextArea',
        formItemProps: {
          mainProps: {
            name: 'full_name',
            label: 'Наименование',
            value: actualRecord['full_name'],
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        },
      },
      {
        type: 'inputTextArea',
        formItemProps: {
          mainProps: {
            name: 'description',
            label: 'Описание',
            value: actualRecord['description'],
          },
        },
      },
      {
        type: 'checkBox',
        formItemProps: {
          mainProps: {
            name: 'is_active',
            label: '',
            value: actualRecord['is_active'],
            valuePropName: 'checked',
          },
        },
        checkBox: {
          defaultCheckBoxText: 'Активный',
        },
      },
    ]),
  );

  return (
    <div>
      <BusinessProcessCardHeader taskId={data.taskId} title={data.taskName}>
        <BusinessProcessTransitionButton
          className='greenButton'
          link
          label='Принять в работу'
          type='primary'
          history={() => {} /* this.props.history.push('/') */}
          onClick={() => {}}
        />

        <BusinessProcessTransitionButton
          className='redButton'
          label='Направить на доработку'
          type='primary'
          onClick={() => {}}
        />
      </BusinessProcessCardHeader>
      <ReusedForm
        flexProps={{ vertical: true }}
        title={data.taskName}
        onFinishForm={(e) => console.log(e)}
        form={form}
      />
      <Button onClick={form.submit}> сбор values</Button>
    </div>
  );
};
