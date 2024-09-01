import { ClearOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { AddElem, Refresh, ResetFilters } from '@features';
import { ReusedCard } from '@shared/components';
import { TableProps } from 'antd';
import style from '../../styles/stations-card.module.css';
import { StationsTableWapper } from '../stations-table/StationsTableWrapper';

export const StationsCardWrapper: React.FC<{
  dataSource: TableProps['dataSource'];
}> = (props) => {
  const title = (
    <span className={style.card_title} data-testid='stationsCardSpanTest'>
      Станции
    </span>
  );

  return (
    <ReusedCard
      dataTestid='stationsCardTest'
      keyCard='stationsCard'
      cardTitle={{ title: title }}
      cardBody={{
        interactionButtons: {
          components: [
            <ResetFilters
              showButton={true}
              disabled={false}
              icon={<ClearOutlined />}
              onClick={() => {}}
            />,
            <AddElem
              showButton={true}
              disabled={false}
              icon={<PlusOutlined />}
              onClick={() => {}}
            />,
            <Refresh
              showButton={true}
              disabled={false}
              icon={<SyncOutlined />}
              onClick={() => {}}
            />,
          ],
        },
        body: <StationsTableWapper dataSource={props.dataSource} />,
      }}
    />
  );
};
