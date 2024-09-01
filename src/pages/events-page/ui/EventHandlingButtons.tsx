import { Button, Space } from 'antd';

export const EventHandlingButtons = () => {
  return (
    <Space>
      <Button //Не учитывать события
        type='primary'
        onClick={() => alert('Нажал не учитывать события')}>
        Не учитывать события
      </Button>

      <Button //Связать события
        type='primary'
        onClick={() => alert('Нажал связать события')}>
        Связать события
      </Button>

      <Button //Принять выбранные события
        type='primary'
        onClick={() => alert('Нажал принять выбранные события')}>
        Принять выбранные события
      </Button>

      <Button //Скорректировать события
        type='primary'
        onClick={() => alert('Нажал скорректировать события')}>
        Скорректировать события
      </Button>
    </Space>
  );
};
