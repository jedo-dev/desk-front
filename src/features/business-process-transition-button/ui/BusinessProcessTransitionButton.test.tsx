import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BusinessProcessTransitionButton } from './BusinessProcessTransitionButton';
matchMediaConfig;

describe('BusinessProcessTransitionButton', () => {
  it('кнопка отобразились на экране', async () => {
    const label = 'Принять в работу';
    render(
      <>
        <BusinessProcessTransitionButton
          label={label}
          showButton={true}
          dataTestId='businessProcessTransitionButtonTest'
        />
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('businessProcessTransitionButtonTest'));
    expect(await screen.findByText(label)).toBeInTheDocument();
  });
});
