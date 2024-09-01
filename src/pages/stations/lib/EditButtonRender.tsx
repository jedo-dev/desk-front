import { useAppDispatch } from '@app/store/hooks/redux';
import { EditButton } from '@features';
import { setActualRecord, setLoadingTable, setOpen } from '@shared/components';
import { Flex } from 'antd';
import { AnyObject } from 'antd/es/_util/type';

export type editButtonRenderProps = {
  record: AnyObject;
};

export const EditButtonRender = ({ record }: editButtonRenderProps) => {
  const dispatch = useAppDispatch();

  return (
    <Flex gap='small' justify='center'>
      <EditButton
        dataTestId='clickEditTest'
        onClick={() => {
          dispatch(setActualRecord(record));
          dispatch(setOpen(true));

          // dispatch(setLoadingTable(false));
        }}
        showButton={true}
      />
    </Flex>
  );
};
