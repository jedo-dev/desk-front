import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withReduxProvider } from '@app/providers/redux';
import { StationsPage } from './StationsPage';

matchMediaConfig;

describe('StationsPage', () => {
  it('Страница станций отрендерилась и соответсвует макету', () => {
    render(withReduxProvider(() => <StationsPage />)());
    expect(screen.getByTestId('StationsPageTest')).toMatchSnapshot();
  });
});
