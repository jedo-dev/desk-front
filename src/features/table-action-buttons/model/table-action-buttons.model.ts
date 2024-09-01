import { TooltipPlacement } from 'antd/es/tooltip';

type basicButtonProps = {
  tooltipTitle?: string;
  showButton: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  key?: string;
  style?: React.CSSProperties;
  dataTestId?: string;
  id?: string;
};

type deleteButtonConfirmProps = {
  tooltipConfirm?: string;
  placement?: TooltipPlacement | undefined;
  okText?: string;
  cancelText?: string;
};

export interface ITableActionButtons {
  viewButtonConfig: basicButtonProps;
  editButtonConfig: basicButtonProps;
  deleteButtonConfig: basicButtonProps & deleteButtonConfirmProps;
}
