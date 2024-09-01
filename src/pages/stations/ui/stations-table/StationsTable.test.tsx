import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TableProps } from 'antd';
import { describe, expect, it } from 'vitest';
import { StationsTableWapper } from './StationsTableWrapper';
import { withReduxProvider } from '@app/providers/redux';
import { stationsColumns } from '../../configs/stations-columns';
import { StationsTable } from './StationsTable';

matchMediaConfig;

//мок данные таблицы
const mockDataSource: TableProps['dataSource'] = [
  {
    code_name: 'КОЛ АЭС',
  },
];

describe('StationsTable', () => {
  it('Конфигурация колонок соответсвует макету для компонента StationsTable', () => {
    expect(stationsColumns).toMatchSnapshot();
  });

  it('Таблица должна отрендериться с валидными данными', () => {
    render(withReduxProvider(() => <StationsTableWapper dataSource={mockDataSource} />)());
    expect(screen.getByText('Код станции')).toBeInTheDocument();
  });

  it('Таблица должна отрендериться с пустыми данными', () => {
    render(withReduxProvider(() => <StationsTableWapper dataSource={[]} />)());
    expect(screen.getByText('Код станции')).toBeInTheDocument();
  });

  it('Таблица должна отрендериться с undefined данными', () => {
    render(withReduxProvider(() => <StationsTableWapper dataSource={undefined} />)());
    expect(screen.getByText('Код станции')).toBeInTheDocument();
  });
});
