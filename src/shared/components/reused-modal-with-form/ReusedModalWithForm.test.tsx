import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { store, withReduxProvider } from '@app/providers/redux';
import { ReusedModalWithForm } from './ReusedModalWithForm';
import { useAppDispatch } from '@app/store/hooks/redux';
import { setOpen } from './slice/reused-modal-with-form-slice';

matchMediaConfig;

const MokReusedModalWithForm = () => {
  const dispatch = useAppDispatch();
  dispatch(setOpen(true)); // Вызываем dispatch внутри компонента

  return <ReusedModalWithForm onFinishForm={undefined} />;
};

describe('ReusedModalWithForm', () => {
  it('Тест выхода из фомры', async () => {
    render(withReduxProvider(() => <MokReusedModalWithForm />)());

    fireEvent.click(screen.getByText('Отмена'));

    const mokOpen = store.getState().reusedModalWithFormReducer.openModal;
    const formItems = store.getState().reusedFormReducer.formItems;

    await waitFor(() => {
      expect(mokOpen).toBe(false);
      expect(formItems).toStrictEqual([]);
    });
  });
});
