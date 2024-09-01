import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TableProps } from 'antd';
import { describe, expect, it } from 'vitest';
import { reactorTypesColumns } from '../../configs/reactor-types-columns';
import { ReactorTypesTableWrapper } from './ReactorTypesTableWrapper';

matchMediaConfig;

//мок данные таблицы
const mockDataSource: TableProps['dataSource'] = [
  {
    code_name: 'КОЛ АЭС',
  },
];

describe('StationsTable', () => {
  it('Конфигурация колонок соответсвует макету для компонента StationsTable', () => {
    expect(reactorTypesColumns).toMatchSnapshot();
  });

  it('Таблица должна отрендериться с валидными данными', () => {
    render(withReduxProvider(() => <ReactorTypesTableWrapper dataSource={mockDataSource} />)());
    expect(screen.getByText('Код реактора')).toBeInTheDocument();
  });

  it('Таблица должна отрендериться с пустыми данными', () => {
    render(withReduxProvider(() => <ReactorTypesTableWrapper dataSource={[]} />)());
    expect(screen.getByText('Код реактора')).toBeInTheDocument();
  });

  it('Таблица должна отрендериться с undefined данными', () => {
    render(withReduxProvider(() => <ReactorTypesTableWrapper dataSource={undefined} />)());
    expect(screen.getByText('Код реактора')).toBeInTheDocument();
  });
});
