import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BusinessProcessWrapper } from './BusinessProcessWrapper';
matchMediaConfig;

vi.mock('@entities', () => ({
  useGetTaskByIdQuery: vi.fn().mockReturnValue({
    data: {},
    isSuccess: true,
  }),
}));

describe('BusinessProcessWrapper', () => {
  it('кнопка отобразились на экране', async () => {
    render(
      <>
        <BusinessProcessWrapper>
          <div data-testid='businessProcessWrapperTest'>Тестовый дочерний компонент</div>
        </BusinessProcessWrapper>
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('businessProcessWrapperTest'));
    expect(await screen.findByText('Тестовый дочерний компонент')).toBeInTheDocument();
  });
});
