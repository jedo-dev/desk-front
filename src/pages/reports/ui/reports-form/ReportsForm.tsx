import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';
import {
  reportSlice,
  useGetPowerUnitsQuery,
  useGetReportTypesQuery,
  useGetStationsQuery,
} from '@entities';
import { ReusedForm } from '@shared/components';
import { reusedFormSlice } from '@shared/components/reused-form/slice/reused-form-slice';

import { Form, FormProps } from 'antd';
import { useEffect } from 'react';

export const ReportsForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { actualRecord } = useAppSelector((state) => state.reusedTableReducer);
  const { setFormItems } = reusedFormSlice.actions;

  const { setFilter } = reportSlice.actions;

  const onFinishForm: FormProps['onFinish'] = (values) => {
    dispatch(setFilter(values));
  };

  const { data: stations } = useGetStationsQuery({});
  const { data: powerUnits } = useGetPowerUnitsQuery({});
  const { data: reportTypes } = useGetReportTypesQuery({});

  useEffect(() => {
    dispatch(
      setFormItems([
        {
          type: 'select',
          formItemProps: {
            style: {
              width: '200px',
            },
            mainProps: {
              name: 'npp',
              label: 'АЭС',
              value: (actualRecord && actualRecord['npp']) || undefined,
              rules: [
                {
                  required: true,
                  message: 'Обязательное поле',
                },
              ],
            },
          },
          select: {
            onSelect: () => form.submit(),
            options: stations?.content || [],
          },
        },
        {
          type: 'select',
          formItemProps: {
            style: {
              width: '200px',
            },
            mainProps: {
              name: 'block',
              label: 'Энергоблок',
              value: (actualRecord && actualRecord['block']) || undefined,
              rules: [
                {
                  required: true,
                  message: 'Обязательное поле',
                },
              ],
            },
          },
          select: {
            onSelect: () => form.submit(),
            options: powerUnits?.content || [],
          },
        },
        {
          type: 'select',
          formItemProps: {
            style: {
              width: '200px',
            },
            mainProps: {
              name: 'type',
              label: 'Тип отчета',
              value: (actualRecord && actualRecord['type']) || undefined,
              rules: [
                {
                  required: true,
                  message: 'Обязательное поле',
                },
              ],
            },
          },
          select: {
            onSelect: () => form.submit(),
            options: reportTypes?.content || [],
          },
        },
      ]),
    );
  }, [stations?.content, powerUnits?.content, reportTypes?.content]);

  return <ReusedForm form={form} onFinishForm={onFinishForm} />;
};
