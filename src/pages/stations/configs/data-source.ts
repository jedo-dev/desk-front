import { TableProps } from 'antd';
import { IStations } from '../../../entities/stations/model/stations.model';

export const stationsDataSource: TableProps['dataSource'] & IStations[] = [
  {
    id: 'test_kol',
    code_name: 'КОЛ АЭС',
    full_name: 'Кольская АЭС',
    description: 'Кольская атомная электростанция',
    is_active: true,
  },
  {
    id: 'test_bel',
    code_name: 'БЕЛ АЭС',
    full_name: 'Белоярская АЭС',
    description: 'АО “Концерн Росэнергоатом”',
    is_active: true,
  },
  {
    id: 'test_kln',
    code_name: 'КЛН АЭС',
    full_name: 'Калининская АЭС',
    description: 'Калининская атомная электростанция',
    is_active: true,
  },
  {
    id: 'test_rst',
    code_name: 'РСТ АЭС',
    full_name: 'Ростовская АЭС',
    description: 'Ростовская атомная электростанция',
    is_active: true,
  },
  {
    id: 'test_smo',
    code_name: 'СМО АЭС',
    full_name: 'Смоленская АЭС',
    description: 'Смоленская атомная электростанция',
    is_active: false,
  },
];
