export interface IMenuItem {
  icon?: string | React.ReactNode;
  key: string;
  label: string;
  children?: IMenuItem[];
  onClick?: (to: string) => void;
}

export interface IMenu {
  menuItems: IMenuItem[];
}
