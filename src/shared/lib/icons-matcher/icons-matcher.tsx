import { BankOutlined, ContainerOutlined, FormOutlined, SnippetsOutlined } from '@ant-design/icons';

export class IconsMatcher {
  static getIcon = (icon: string) => {
    switch (icon) {
      case 'FormOutlined':
        return <FormOutlined />;
      case 'SnippetsOutlined':
        return <SnippetsOutlined />;
      case 'ContainerOutlined':
        return <ContainerOutlined />;
      case 'BankOutlined':
        return <BankOutlined />;
      default:
        return null;
    }
  };
}
