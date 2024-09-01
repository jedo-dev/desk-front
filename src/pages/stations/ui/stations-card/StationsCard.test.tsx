import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { TableProps } from 'antd';
import { render, screen } from '@testing-library/react';
import { withReduxProvider } from '@app/providers/redux';
import { StationsCardWrapper } from './StationsCardWrapper';
import { describe, expect, it } from 'vitest';

matchMediaConfig;

const mokData: TableProps['dataSource'] = [
  {
    id: 'test_kol',
    code_name: 'test',
    full_name: 'test',
    description: 'test',
    is_active: true,
  },
];

describe('StationsCard', () => {
  it('карта станций отрендерилась и соответсвует макету', () => {
    render(withReduxProvider(() => <StationsCardWrapper dataSource={mokData} />)());
    expect(screen.getByTestId('stationsCardSpanTest').innerHTML).toBe('Станции');
    expect(screen.getByTestId('stationsCardTest')).toMatchSnapshot();
  });

  it('карта станций отрендерилась с валидными данными', () => {
    render(withReduxProvider(() => <StationsCardWrapper dataSource={mokData} />)());
    expect(screen.getByText('Станции')).toBeInTheDocument();
    expect(screen.getByText('Код станции')).toBeInTheDocument();
    expect(screen.getByText('Название станции')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByText('Активный')).toBeInTheDocument();
  });
});
