import { BusinessProcessCardButtons } from '@features';
import { Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { IBusinessProcessCardHeader } from './model/business-process-card-header.model';
import style from './styles/BusinessProcessCardHeader.module.css';

export const BusinessProcessCardHeader: React.FC<IBusinessProcessCardHeader> = (props) => {
  return (
    <div className={style.centerTitle}>
      <Title data-testid={props.dataTestId} level={3}>
        {props.title || ''}
      </Title>
      <Space wrap>
        <div className={style.paginationUpdate}>
          <Space wrap size='middle'>
            {props.children}

            <BusinessProcessCardButtons taskId={props.taskId} />
          </Space>
        </div>
      </Space>
    </div>
  );
};
