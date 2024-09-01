import { Button, Dropdown, message } from 'antd';

export const ReportButton = ({ taskId, dataTestId }: { taskId: string; dataTestId?: string }) => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: 'DOCX',
            label: 'DOCX',
          },
          {
            key: 'ODT',
            label: 'ODT',
          },
        ],
        onClick: (format) => {
          if (taskId === undefined) {
            message.warning('Сохраните документ');
            return;
          }
          console.log(format);
        },
      }}>
      <Button data-testid={dataTestId} type='dashed' onClick={() => {}}>
        {'Выгрузить файл'}
      </Button>
    </Dropdown>
  );
};
