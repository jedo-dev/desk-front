import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateNodeElements, { filterOptionSelectDefault } from './CreateNodeElements';

matchMediaConfig;

describe('CreateNodeElements', () => {
  it('функция вернула inputTextArea элемент', () => {
    render(
      <CreateNodeElements
        type={'inputTextArea'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        }}
      />,
    );

    expect(screen.getByPlaceholderText('Введите значение')).toBeInTheDocument();
  });

  it('функция вернула inputNumber элемент', async () => {
    render(
      <CreateNodeElements
        type={'inputNumber'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        }}
        inputNumber={{
          className: 'test',
          step: 0,
          min: 1,
        }}
      />,
    );

    expect(screen.getByPlaceholderText('Введите значение')).toBeInTheDocument();
  });

  it('функция вернула select элемент', () => {
    render(
      <CreateNodeElements
        type={'select'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        }}
      />,
    );

    expect(screen.getByText('Выберите значение')).toBeInTheDocument();
  });

  it('тест filterOptionSelect функции', () => {
    expect(filterOptionSelectDefault('TEST', { label: 'TEST', value: 'TEST' })).toBe(true);
  });

  it('функция вернула datePicker элемент', () => {
    render(
      <CreateNodeElements
        type={'datePicker'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
            rules: [
              {
                required: true,
                message: 'Обязательное поле',
              },
            ],
          },
        }}
      />,
    );

    expect(screen.getByPlaceholderText('Выберите дату')).toBeInTheDocument();
  });

  it('функция вернула checkBox элемент', () => {
    render(
      <CreateNodeElements
        type={'checkBox'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
          },
        }}
      />,
    );

    expect(screen.getByTestId('CreateNodeElementsCheckBox')).toBeInTheDocument();
  });

  it('функция вернула checkBox элемент с children', () => {
    render(
      <CreateNodeElements
        type={'checkBox'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
          },
        }}
        checkBox={{
          children: 'test check',
        }}
      />,
    );

    expect(screen.getByText('test check')).toBeInTheDocument();
  });

  it('функция вернула checkBox элемент с defaultCheckBoxText', () => {
    render(
      <CreateNodeElements
        type={'checkBox'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
          },
        }}
        checkBox={{
          defaultCheckBoxText: 'test check',
        }}
      />,
    );

    expect(screen.getByText('test check')).toBeInTheDocument();
  });

  it('функция вернула table элемент', () => {
    render(
      <CreateNodeElements
        type={'table'}
        formItemProps={{
          mainProps: {
            name: 'test',
            label: 'Test',
            value: '',
          },
        }}
      />,
    );

    expect(screen.getByTestId('CreateNodeElementsTable')).toBeInTheDocument();
  });
});
