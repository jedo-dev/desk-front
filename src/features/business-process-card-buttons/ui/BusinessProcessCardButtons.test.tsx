import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BusinessProcessCardButtons } from './BusinessProcessCardButtons';
matchMediaConfig;

describe('BusinessProcessCardButtons', () => {
  it('кнопки отобразились на экране', async () => {
    render(
      <>
        <BusinessProcessCardButtons
          taskId='1'
          dataTestId={{
            commentTest: 'commentTest',
            approvalHistoryTest: 'approvalHistoryTest',
            historyTest: 'historyTest',
          }}
        />
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('commentTest'));
    expect(await screen.findByText('Комментировать')).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByTestId('approvalHistoryTest'));
    expect(await screen.findByText('История согласования')).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByTestId('historyTest'));
    expect(await screen.findByText('История')).toBeInTheDocument();
  });
});
