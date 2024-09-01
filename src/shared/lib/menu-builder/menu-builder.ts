import { NavigateFunction } from 'react-router-dom';

interface MenuItem {
  icon?: string | React.ReactNode;
  key: string;
  label: string;
  children?: MenuItem[];
  onClick?: (to: string) => void;
}

export class MenuBuilder {
  constructor(private navigate: NavigateFunction, private iconsMatcher: any) {}

  buildMenuObject = (items: MenuItem[]) => {
    const menu: MenuItem[] = items.map(this.itemResolver);
    return menu;
  };

  itemResolver = (item: MenuItem): MenuItem => {
    if (Array.isArray(item.children)) {
      return {
        ...item,
        icon: item.icon && this.iconsMatcher.getIcon(item.icon as string),
        children: this.buildMenuObject(item.children),
      };
    }

    return {
      ...item,
      icon: item.icon && this.iconsMatcher.getIcon(item.icon as string),
      onClick: () => this.navigate(item.key),
    };
  };
}
