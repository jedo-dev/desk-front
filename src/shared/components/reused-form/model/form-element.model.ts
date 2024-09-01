import { Dayjs } from 'dayjs';
import { IFormItemsCaracteristic } from './reused-form.model';
import { TableProps } from 'antd';

type elementType = 'inputTextArea' | 'inputNumber' | 'select' | 'datePicker' | 'checkBox' | 'table';
type panelMode = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';
type pickerMode = Exclude<panelMode, 'datetime' | 'decade'>;
type selectOption = { label: string; value: string | number | boolean };
type selectValue = string | number | boolean;

type inputTextArea = {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  autoSize?:
    | boolean
    | {
        minRows?: number;
        maxRows?: number;
      };

  placeholder?: string;
};

type inputNumber = {
  className?: string;
  style?: React.CSSProperties;
  step: number;
  min: number;
  decimalSeparator?: string;
  placeholder?: string;
  disabled?: boolean;
};

type datePicker = {
  className?: string;
  style?: React.CSSProperties;
  format?: string;
  picker?: pickerMode;
  inputReadOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  suffixIcon?: React.ReactNode;
  onChange?: (value: Dayjs | null, dateString: string) => void;
  disabledDate?: (date: Dayjs) => boolean;
};

type select = {
  className?: string;
  style?: React.CSSProperties;
  allowClear?: boolean;
  showSearch?: boolean;
  mode?: 'multiple' | 'tags';
  maxTagCount?: number | 'responsive';
  disabled?: boolean;
  showArrow?: boolean;
  placeholder?: string;
  options?: selectOption[];
  filterOption?: (inputValue: string, option?: selectOption) => boolean | boolean;
  onSelect?: (value: selectValue, option: selectOption) => void;
  onClear?: () => void;
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
  dropdownMatchSelectWidth?: boolean | number;
};

type checkBox = {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode | string;
  defaultCheckBoxText?: string;
};

type table = {
  className?: string;
  style?: React.CSSProperties;
  bordered?: boolean;
  dataSource: { key: string; [key: string]: unknown }[];
  columns: TableProps['columns'];
  pagination?: TableProps['pagination'];
};

export interface IFormElement {
  type: elementType;
  formItemProps: IFormItemsCaracteristic;
  inputTextArea?: inputTextArea;
  inputNumber?: inputNumber;
  datePicker?: datePicker;
  select?: select;
  checkBox?: checkBox;
  table?: table;
}
