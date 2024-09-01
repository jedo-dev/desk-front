import { Button, Tooltip } from 'antd';
import { ITableActionButtons } from '../../model/table-action-buttons.model';
import { editButtonConfig } from '../../configs/table-action-buttons-default';
import { EditOutlined } from '@ant-design/icons';

export const EditButton: React.FC<ITableActionButtons['editButtonConfig']> = (props) => {
  if (props.showButton) {
    return (
      <Tooltip
        key={props.key || Date.now().toString(36) + Math.random().toString(36).substring(2)}
        title={props.tooltipTitle || editButtonConfig.tooltipTitle}>
        <Button
          id={props.id}
          data-testid={props.dataTestId}
          ghost
          type='primary'
          size='small'
          shape='circle'
          disabled={props.disabled || editButtonConfig.disabled}
          style={props.style || editButtonConfig.style}
          icon={props.icon || <EditOutlined />}
          onClick={props.onClick || editButtonConfig.onClick}
        />
      </Tooltip>
    );
  }
};
