import { Button, Tooltip } from 'antd';
import { IDefaultCardInteractiveButtons } from '../model/card-interactive-buttons-default';
import styles from '../styles/card-interactive-buttons.module.css';

export const AddElem: React.FC<IDefaultCardInteractiveButtons['addButtonConfig']> = (props) => {
  return (
    <Tooltip
      key={props.key || Date.now().toString(36) + Math.random().toString(36).substring(2)}
      title={props.tooltipTitle || null}>
      <Button
        ghost
        type='primary'
        className={styles.addElem}
        disabled={props.disabled}
        style={props.style}
        icon={props.icon}
        onClick={props.onClick}
      />
    </Tooltip>
  );
};
