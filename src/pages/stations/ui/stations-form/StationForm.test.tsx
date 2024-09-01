import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { StationsForm } from './StationsForm';
import { withReduxProvider } from '@app/providers/redux';

import { setOpen } from '@shared/components';
import { finishStationForm } from './lib/finish-form';
import { useAppDispatch } from '@app/store/hooks/redux';

matchMediaConfig;

//компонент с хуком useAppDispatch()
const WrappedStationsForm = () => {
  const dispatch = useAppDispatch();
  dispatch(setOpen(true)); // Вызываем dispatch внутри компонента

  return <StationsForm />;
};

type stationFormItems = {
  code_name: string;
  full_name: string;
  description?: string;
  is_active?: boolean;
};

describe('StationsForm', () => {
  it('форма открыта и конфигурация элементов формы соответсвует требованиям макета', () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());
    expect(screen.getByTestId('testForm')).toMatchSnapshot();
  });

  it('форма открыта и содержит поля на основе конфига', () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());
    expect(screen.getByText('Код станции')).toBeInTheDocument();
    expect(screen.getByText('Название станции')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByText('Активный')).toBeInTheDocument();
  });

  it('при заполненных обязательных полях вызывается функция onFinish', async () => {
    render(withReduxProvider(() => <WrappedStationsForm />)());

    fireEvent.change(screen.getByLabelText('Код станции'), {
      target: { value: 'тест код станции' },
    });
    fireEvent.change(screen.getByLabelText('Название станции'), {
      target: { value: 'тест название станции' },
    });

    const mokInputObj: stationFormItems = {
      code_name: screen.getByLabelText('Код станции').innerHTML,
      full_name: screen.getByLabelText('Название станции').innerHTML,
    };

    const saveButton = screen.getByText('Сохранить');
    fireEvent.click(saveButton);

    expect(finishStationForm(mokInputObj)).toStrictEqual({
      code_name: 'тест код станции',
      full_name: 'тест название станции',
    });
  });
});
