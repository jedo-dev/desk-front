import { Button, Space } from 'antd';

export const MyTaskHandlingButtons = (handleRefresh: () => void) => {
  return (
    <Space>
      <Button type='primary' onClick={handleRefresh}>
        Обновить
      </Button>
    </Space>
  );
};
