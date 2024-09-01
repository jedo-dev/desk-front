import { Button } from 'antd';
import { Link } from 'react-router-dom';
import style from './BusinessProcessTransitionButton.module.css';

export const BusinessProcessTransitionButton = (props: any) => {
  const { label, onClick, type, link, history, disabled, className, htmlType, dataTestId } = props;
  return (
    <>
      {!link ? (
        <Button
          type={type || 'default'}
          htmlType={htmlType || ''}
          onClick={onClick}
          disabled={disabled}
          data-testid={dataTestId}
          className={style[className]}>
          {label}
        </Button>
      ) : (
        <Link
          to={'/myTasks'}
          onClick={() => {
            // history();
          }}>
          <Button
            type={type || 'primary'}
            disabled={disabled}
            data-testid={dataTestId}
            onClick={onClick}
            className={style[className]}>
            {label}
          </Button>
        </Link>
      )}
    </>
  );
};
