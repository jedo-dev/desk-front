import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReactorTypesForm } from './ReactorTypesForm';

import { useAppDispatch } from '@app/store/hooks/redux';
import { setOpen } from '@shared/components';
import { finishForm } from './lib/finish-form';

matchMediaConfig;

//компонент с хуком useAppDispatch()
const WrappedStationsForm = () => {
  const dispatch = useAppDispatch();
  dispatch(setOpen(true)); // Вызываем dispatch внутри компонента

  return <ReactorTypesForm />;
};

type stationFormItems = {
  code_name: string;
  full_name: string;
  description?: string;
  is_active?: boolean;
};

describe('ReactorTypesForm', () => {
  it('форма открыта и конфигурация элементов формы соответсвует требованиям макета', () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());
    expect(screen.getByTestId('testForm')).toMatchSnapshot();
  });

  it('форма открыта и содержит поля на основе конфига', () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());
    expect(screen.getByText('Код реактора')).toBeInTheDocument();
    expect(screen.getByText('Наименование')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByText('Активный')).toBeInTheDocument();
  });

  it('при заполненных обязательных полях вызывается функция onFinish', async () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());

    fireEvent.change(screen.getByLabelText('Код реактора'), {
      target: { value: 'тест код реактора' },
    });
    fireEvent.change(screen.getByLabelText('Наименование'), {
      target: { value: 'тест наименование' },
    });

    const mokInputObj: stationFormItems = {
      code_name: screen.getByLabelText('Код реактора').innerHTML,
      full_name: screen.getByLabelText('Наименование').innerHTML,
    };

    const saveButton = screen.getByText('Сохранить');
    fireEvent.click(saveButton);

    expect(finishForm(mokInputObj)).toStrictEqual({
      code_name: 'тест код реактора',
      full_name: 'тест наименование',
    });
  });
});
