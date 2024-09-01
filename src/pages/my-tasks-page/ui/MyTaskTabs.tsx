import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { useState } from 'react';
import { AllTaskTable } from './AllTaskTable';
import { IncomingTaskTable } from './IncomingTaskTable';
import { PendingTaskTable } from './PendingTaskTable';

export const MyTaskTabs = (onRefresh: () => void) => {
  const [activeKey, setActiveKey] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} onChange={handleTabChange} defaultActiveKey='1'>
      <TabPane tab='Входящие' key='1'>
        <IncomingTaskTable refetchTrigger={activeKey === '1' && onRefresh} />
      </TabPane>
      <TabPane tab='Исходящие' key='2'>
        <PendingTaskTable refetchTrigger={activeKey === '2' && onRefresh} />
      </TabPane>
      <TabPane tab='Все задачи' key='3'>
        <AllTaskTable refetchTrigger={activeKey === '3' && onRefresh} />
      </TabPane>
    </Tabs>
  );
};
