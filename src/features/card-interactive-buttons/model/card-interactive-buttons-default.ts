import { FlexProps } from 'antd';

type buttonConfig = {
  showButton: boolean;
  disabled: boolean;
  icon: React.ReactNode;
  onClick: () => void;
  tooltipTitle?: string | React.ReactNode;
  style?: React.CSSProperties;
  key?: string;
};

export interface IDefaultCardInteractiveButtons {
  resetFiltersButtonConfig: buttonConfig;
  addButtonConfig: buttonConfig;
  refreshButtonConfig: buttonConfig;
  flexGap?: FlexProps['gap'];
}
