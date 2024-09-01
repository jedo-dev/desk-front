import { Button, Popconfirm, Tooltip } from 'antd';
import { ITableActionButtons } from '../../model/table-action-buttons.model';
import { deleteButtonConfig } from '../../configs/table-action-buttons-default';

export const DeleteButton: React.FC<ITableActionButtons['deleteButtonConfig']> = (props) => {
  if (props.showButton) {
    return (
      <Tooltip
        key={props.key || Date.now().toString(36) + Math.random().toString(36).substring(2)}
        title={props.tooltipTitle || deleteButtonConfig.tooltipTitle}>
        <Popconfirm
          placement={props.placement || deleteButtonConfig.placement}
          title={props.tooltipConfirm || deleteButtonConfig.tooltipConfirm}
          okText={props.okText || deleteButtonConfig.okText}
          cancelText={props.cancelText || deleteButtonConfig.cancelText}
          onConfirm={props.onClick || deleteButtonConfig.onClick}>
          <Button
            data-testid={props.dataTestId}
            ghost
            type='primary'
            size='small'
            shape='circle'
            disabled={props.disabled || deleteButtonConfig.disabled}
            style={props.style || deleteButtonConfig.style}
            icon={props.icon || deleteButtonConfig.icon}
          />
        </Popconfirm>
      </Tooltip>
    );
  }
};
