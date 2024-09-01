import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.css';

interface Props {
  collapsed: boolean;
}

function Logo({ collapsed }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Header
      onClick={() => navigate('/')}
      style={{ backgroundColor: colorBgContainer }}
      className={styles.header}>
      <div data-testid={'logo-container'} className={styles['logo-container']}>
        <img src='/rosatom-logo.svg' alt='logo' width={'40px'} />
        {!collapsed && (
          <Title style={{ whiteSpace: 'nowrap' }} level={4} className={styles['logo-title']}>
            Росэнергоатом
          </Title>
        )}
      </div>
    </Header>
  );
}

export default Logo;
