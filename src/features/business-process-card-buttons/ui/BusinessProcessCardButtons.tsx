import { ReportButton } from '@features';
import { Badge, Button, Space } from 'antd';
import { IDataTestId } from '../model/business-process-card-buttons.model';

export const BusinessProcessCardButtons = ({
  taskId,
  dataTestId,
}: {
  taskId: string;
  dataTestId?: IDataTestId;
}) => {
  return (
    <Space wrap size='middle'>
      <ReportButton taskId={taskId} />

      <Button data-testid={dataTestId?.commentTest} type='dashed' onClick={() => {}}>
        Комментировать
      </Button>

      <Button data-testid={dataTestId?.approvalHistoryTest} type='dashed' onClick={() => {}}>
        История согласования
      </Button>

      <Badge color={'blue'} count={0}>
        <Button data-testid={dataTestId?.historyTest} type='dashed' onClick={() => {}}>
          История
        </Button>
      </Badge>
    </Space>
  );
};
