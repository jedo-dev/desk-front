import { store, withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EditButtonRender } from './EditButtonRender';

matchMediaConfig;

const mokRecord = {
  id: 'test',
  code_name: 'test',
  full_name: 'test',
  description: 'test',
  is_active: true,
};

const mokDispatch = vi.spyOn(store, 'dispatch');

describe('EditButtonRender', () => {
  it('Рендер действий для таблицы типов реактора соответсвует макету', () => {
    render(withReduxProvider(() => <EditButtonRender record={{}} />)());
    expect(screen.getByTestId('clickEditTest')).toMatchSnapshot();
  });

  it('нажатие на кнопку редактирования записывает элемент таблицы и открывает модальное окно', async () => {
    render(withReduxProvider(() => <EditButtonRender record={mokRecord} />)());

    fireEvent.click(screen.getByTestId('clickEditTest'));

    const mokModalStatus = store.getState().reusedModalWithFormReducer.openModal;
    const mokActualRecord = store.getState().reusedTableReducer.actualRecord;

    await waitFor(() => {
      expect(mokModalStatus).toBe(true);
      expect(mokActualRecord).toStrictEqual(mokRecord);
      expect(mokDispatch).toBeCalledTimes(2);
    });
  });
});
