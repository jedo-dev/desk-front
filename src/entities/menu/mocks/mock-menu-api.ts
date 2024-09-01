export const menuItems = [
  {
    icon: 'FormOutlined',
    key: 'menu-1',
    label: 'Реестры',
    children: [
      { key: '/reestr-example-1', label: 'Пример реестра 1' },
      { icon: 'SnippetsOutlined', key: '/reestr-example-2', label: 'Пример реестра 4' },
    ],
  },
  {
    icon: 'FormOutlined',
    key: 'menu-1a',
    label: 'Справочники',
    children: [
      { key: '/spravochnik-example-1', label: 'Пример справочника 1' },
      { key: '/spravochnik-example-2', label: 'Пример справочника 2' },
    ],
  },
  { icon: 'SnippetsOutlined', key: '/my-tasks', label: 'Мои задачи' },
];
