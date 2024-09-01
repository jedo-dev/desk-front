import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';
import { ReusedModalWithForm, setFormItems } from '@shared/components';
import { useEffect } from 'react';
import { finishForm } from './lib/finish-form';

export const ReactorTypesForm = () => {
  const dispatch = useAppDispatch();
  const { openModal } = useAppSelector((state) => state.reusedModalWithFormReducer);
  const {
    actualRecord = {
      code_name: undefined,
      full_name: undefined,
      description: undefined,
      is_active: false,
    },
  } = useAppSelector((state) => state.reusedTableReducer);

  useEffect(() => {
    if (openModal === true) {
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
    }
  }, [openModal]);

  return (
    <ReusedModalWithForm
      onFinishForm={finishForm}
      antFormFlexProps={{ vertical: true }}
      dataTestid='testForm'
    />
  );
};
