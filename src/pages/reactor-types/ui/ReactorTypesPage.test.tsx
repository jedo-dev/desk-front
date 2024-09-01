import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReactorTypesPage } from './ReactorTypesPage';

matchMediaConfig;

describe('ReactoTypesPage', () => {
  it('Страница станций отрендерилась и соответсвует макету', () => {
    render(withReduxProvider(() => <ReactorTypesPage />)());
    expect(screen.getByTestId('ReactorTypesPageTest')).toMatchSnapshot();
  });
});
