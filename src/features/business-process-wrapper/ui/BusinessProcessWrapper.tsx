import { useGetTaskByIdQuery } from '@entities';
import { Card, Spin } from 'antd';
import { cloneElement } from 'react';
import { useParams } from 'react-router-dom';

export const BusinessProcessWrapper = ({ children }: any) => {
  const { id } = useParams();
  const { data, isLoading } = useGetTaskByIdQuery(id);
  const childWithProps = children && data ? cloneElement(children, { data }) : null;
  return (
    <>
      <Spin spinning={isLoading}>
        <Card>{childWithProps}</Card>
      </Spin>
    </>
  );
};
