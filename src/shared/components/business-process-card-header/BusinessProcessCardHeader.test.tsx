import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BusinessProcessCardHeader } from './BusinessProcessCardHeader';
matchMediaConfig;

describe('BusinessProcessCardHeader', () => {
  it('кнопка отобразились на экране', async () => {
    render(
      <>
        <BusinessProcessCardHeader title='Тестовый компонент' taskId='1' dataTestId='titleTest'>
          <div data-testid='businessProcessCardHeaderTest'>Тестовый дочерний компонент</div>
        </BusinessProcessCardHeader>
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('businessProcessCardHeaderTest'));
    expect(await screen.findByText('Тестовый дочерний компонент')).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByTestId('titleTest'));
    expect(await screen.findByText('Тестовый компонент')).toBeInTheDocument();
  });
});
