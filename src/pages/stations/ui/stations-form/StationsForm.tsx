import { ReusedModalWithForm, setFormItems } from '@shared/components';
import { useEffect } from 'react';
import { finishStationForm } from './lib/finish-form';
import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';

export const StationsForm = () => {
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
                label: 'Код станции',
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
                label: 'Название станции',
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
      onFinishForm={finishStationForm}
      antFormFlexProps={{ vertical: true }}
      dataTestid='testForm'
    />
  );

  //пример контроля положения элементов в форме

  // useEffect(() => {
  //   dispatch(
  //     setFormItems([
  //       {
  //         type: 'inputTextArea',
  //         formItemProps: {
  //           mainProps: {
  //             name: 'code_name',
  //             label: 'Код станции',
  //             value: (actualRecord && actualRecord['code_name']) || undefined,
  //             rules: [
  //               {
  //                 required: true,
  //                 message: 'Обязательное поле',
  //               },
  //             ],
  //           },
  //           style: {
  //             flexGrow: 1,
  //           },
  //         },
  //       },
  //       {
  //         type: 'inputTextArea',
  //         formItemProps: {
  //           mainProps: {
  //             name: 'full_name',
  //             label: 'Название станции',
  //             value: (actualRecord && actualRecord['full_name']) || undefined,
  //             rules: [
  //               {
  //                 required: true,
  //                 message: 'Обязательное поле',
  //               },
  //             ],
  //           },
  //           style: {
  //             flexGrow: 1,
  //           },
  //         },
  //       },
  //       {
  //         type: 'inputTextArea',
  //         formItemProps: {
  //           mainProps: {
  //             name: 'description',
  //             label: 'Описание',
  //             value: (actualRecord && actualRecord['description']) || undefined,
  //           },
  //           style: {
  //             width: '100%',
  //           },
  //         },
  //       },
  //       {
  //         type: 'checkBox',
  //         formItemProps: {
  //           mainProps: {
  //             name: 'is_active',
  //             label: '',
  //             value: (actualRecord && actualRecord['is_active']) || false,
  //             valuePropName: 'checked',
  //           },
  //           style: {
  //             display: 'flex',
  //             alignSelf: 'flex-end',
  //             justifyContent: 'flex-end',
  //           },
  //         },
  //         checkBox: {
  //           defaultCheckBoxText: 'Активный',
  //         },
  //       },
  //     ]),
  //   );
  // }, [open === true]);

  // return <ReusedModalWithForm open={open} onFinishForm={onFinishForm} />;
};
