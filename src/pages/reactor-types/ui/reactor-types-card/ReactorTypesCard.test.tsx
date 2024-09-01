import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TableProps } from 'antd';
import { describe, expect, it } from 'vitest';
import { ReactorTypesCard } from './ReactorTypesCard';

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

describe('ReactorTypesCard', () => {
  it('карта "типы реакторов" отрендерилась и соответсвует макету', () => {
    render(withReduxProvider(() => <ReactorTypesCard dataSource={mokData} />)());
    expect(screen.getByTestId('ReactorTypesCardSpanTest').innerHTML).toBe('Типы реакторов');
    expect(screen.getByTestId('ReactorTypesCardTest')).toMatchSnapshot();
  });

  it('карта "типы реакторов" отрендерилась с валидными данными', () => {
    render(withReduxProvider(() => <ReactorTypesCard dataSource={mokData} />)());
    expect(screen.getByText('Код реактора')).toBeInTheDocument();
    expect(screen.getByText('Наименование')).toBeInTheDocument();
    expect(screen.getByText('Описание')).toBeInTheDocument();
    expect(screen.getByText('Активный')).toBeInTheDocument();
    expect(screen.getByText('Действия')).toBeInTheDocument();
  });
});
