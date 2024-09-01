import { Button, Tooltip } from 'antd';
import { ITableActionButtons } from '../../model/table-action-buttons.model';
import { viewButtonConfig } from '../../configs/table-action-buttons-default';

export const ViewButton: React.FC<ITableActionButtons['viewButtonConfig']> = (props) => {
  if (props.showButton) {
    return (
      <Tooltip
        key={props.key || Date.now().toString(36) + Math.random().toString(36).substring(2)}
        title={props.tooltipTitle || viewButtonConfig.tooltipTitle}>
        <Button
          data-testid={props.dataTestId}
          ghost
          type='primary'
          size='small'
          shape='circle'
          disabled={props.disabled || viewButtonConfig.disabled}
          style={props.style || viewButtonConfig.style}
          icon={props.icon || viewButtonConfig.icon}
          onClick={props.onClick || viewButtonConfig.onClick}
        />
      </Tooltip>
    );
  }
};
