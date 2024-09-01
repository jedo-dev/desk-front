import { Typography } from 'antd';

const { Text } = Typography;
export const ColorIndicator = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ background: '#DC143C', width: 60, height: 27 }} />
        <Text style={{ fontSize: 14, marginLeft: 10, width: 265 }}>
          Событие отклонено и не учитывается в расчете
        </Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
        <div style={{ background: '#0000CD', width: 60, height: 27 }} />
        <Text style={{ fontSize: 14, marginLeft: 10, width: 265 }}>
          Событие связано с основным событием и не учитывается в расчете
        </Text>
      </div>
    </div>
  );
};
