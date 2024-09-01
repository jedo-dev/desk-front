import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReportButton } from './ReportButton';
matchMediaConfig;

describe('ReportButton', () => {
  it('кнопка отобразились на экране', async () => {
    render(
      <>
        <ReportButton taskId='1' dataTestId='reportButtonTest' />
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('reportButtonTest'));
    expect(await screen.findByText('Выгрузить файл')).toBeInTheDocument();
  });
});
