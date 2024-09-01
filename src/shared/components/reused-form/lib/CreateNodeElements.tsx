import { CalendarOutlined } from '@ant-design/icons';
import { Checkbox, DatePicker, Input, InputNumber, Select, Table } from 'antd';
import { IFormElement } from '../model/form-element.model';

export const filterOptionSelectDefault = (input: string, option?: any) => {
  return option?.label.toLowerCase().includes(input.toLowerCase());
};

export const CreateNodeElements = (configElem: IFormElement) => {
  switch (configElem.type) {
    case 'inputTextArea':
      return (
        <Input.TextArea
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          style={undefined}
          disabled={false}
          autoSize={true}
          placeholder={'Введите значение'}
          {...configElem.inputTextArea}
        />
      );
    case 'inputNumber':
      return (
        <InputNumber
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          style={undefined}
          step={1}
          min={0}
          decimalSeparator={','}
          placeholder={'Введите значение'}
          disabled={false}
          {...configElem.inputNumber}
        />
      );
    case 'select':
      return (
        <Select
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          style={undefined}
          allowClear={true}
          showSearch={true}
          showArrow={true}
          mode={undefined}
          maxTagCount={undefined}
          disabled={false}
          placeholder={'Выберите значение'}
          options={[]}
          filterOption={(input, option) => filterOptionSelectDefault(input, option)}
          onSelect={undefined}
          onClear={undefined}
          dropdownRender={undefined}
          dropdownMatchSelectWidth={500}
          {...configElem.select}
        />
      );
    case 'datePicker':
      return (
        <DatePicker
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          style={undefined}
          format={'DD.MM.YYYY'}
          picker={'date'}
          inputReadOnly={true}
          disabled={false}
          disabledDate={undefined}
          placeholder={'Выберите дату'}
          //@ts-ignore
          onChange={undefined}
          suffixIcon={<CalendarOutlined />}
          {...configElem.datePicker}
        />
      );
    case 'checkBox':
      return (
        <Checkbox
          data-testid='CreateNodeElementsCheckBox'
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          style={undefined}
          disabled={false}
          {...configElem.checkBox}>
          {configElem.checkBox?.children ? (
            configElem.checkBox?.children
          ) : (
            <span>{configElem.checkBox?.defaultCheckBoxText}</span>
          )}
        </Checkbox>
      );
    case 'table':
      return (
        <Table
          data-testid='CreateNodeElementsTable'
          key={Date.now().toString(36) + Math.random().toString(36).substring(2)}
          bordered={true}
          dataSource={[]}
          columns={[]}
          {...configElem.table}
        />
      );
  }
};

export default CreateNodeElements;
