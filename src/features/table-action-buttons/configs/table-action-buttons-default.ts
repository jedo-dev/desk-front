import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { ITableActionButtons } from '../model/table-action-buttons.model';

export const viewButtonConfig: ITableActionButtons['viewButtonConfig'] = {
  showButton: true,
  disabled: false,
  icon: typeof EyeOutlined,
  tooltipTitle: 'Просмотр',
  onClick: () => alert('Нажал на просмотр'),
  style: {
    padding: 0,
    color: '#1890ff',
    borderColor: '#1890ff',
  },
};

export const editButtonConfig: ITableActionButtons['editButtonConfig'] = {
  showButton: true,
  disabled: false,
  icon: typeof EditOutlined,
  tooltipTitle: 'Редактировать',
  onClick: () => alert('Нажал на редактировать'),
  style: {
    padding: 0,
    color: '#DAA520',
    borderColor: '#DAA520',
  },
};

export const deleteButtonConfig: ITableActionButtons['deleteButtonConfig'] = {
  showButton: true,
  disabled: false,
  icon: typeof DeleteOutlined,
  tooltipTitle: 'Удалить',
  placement: 'topRight',
  tooltipConfirm: 'Вы уверены, что хотите удалить запись?',
  okText: 'Да',
  cancelText: 'Нет',
  onClick: () => alert('Нажал на удалить'),
  style: {
    padding: 0,
    color: '#ed7878',
    borderColor: '#ed7878',
  },
};
