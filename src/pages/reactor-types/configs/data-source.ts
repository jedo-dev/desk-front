import { TableProps } from 'antd';

export const reactorTypesDataSource: TableProps['dataSource'] = [
  {
    id: 'test_kol',
    code_name: 'ВВЭР',
    full_name: 'Водно-водяной энергетический реактор',
    description: 'Водно-водяной энергетический реактор',
    is_active: true,
  },
  {
    id: 'test_bel',
    code_name: 'РБМК',
    full_name: 'Реактор большой мощности канальный',
    description: 'Реактор большой мощности канальный',
    is_active: true,
  },
  {
    id: 'test_kln',
    code_name: 'БН',
    full_name: 'Реактор на быстрых нейтронах',
    description: 'Реактор на быстрых нейтронах',
    is_active: false,
  },
];
