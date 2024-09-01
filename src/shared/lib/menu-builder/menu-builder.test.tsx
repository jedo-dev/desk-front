import { IMenuItem } from '@entities';
import { JSX } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MenuBuilder } from './menu-builder';

class IconsMatcherMock {
  static getIcon(icon: string): JSX.Element {
    return <div>{icon}</div>;
  }
}

describe('MenuBuilder', () => {
  let navigateMock: any;
  let menuBuilder: MenuBuilder;

  beforeEach(() => {
    navigateMock = vi.fn();
    menuBuilder = new MenuBuilder(navigateMock, IconsMatcherMock);
  });

  it('создает меню с одним элементом у которого нет дочерних элементов', () => {
    const mockItem: IMenuItem = {
      key: '/home',
      label: 'Home',
      icon: 'FormOutlined',
    };

    const result = menuBuilder.buildMenuObject([mockItem]);

    expect(result).toEqual([
      {
        ...mockItem,
        icon: <div>FormOutlined</div>,
        onClick: expect.any(Function),
      },
    ]);
  });

  it('создает меню с одним элементом у которого есть дочерние элементы', () => {
    const mockItem: IMenuItem = {
      key: '/parent',
      label: 'Parent',
      icon: 'ContainerOutlined',
      children: [
        {
          key: '/child',
          label: 'Child',
          icon: 'SnippetsOutlined',
        },
      ],
    };

    const result = menuBuilder.buildMenuObject([mockItem]);

    expect(result).toEqual([
      {
        ...mockItem,
        icon: <div>ContainerOutlined</div>,
        children: [
          {
            key: '/child',
            label: 'Child',
            icon: <div>SnippetsOutlined</div>,
            onClick: expect.any(Function),
          },
        ],
      },
    ]);
  });

  it('вызов функции навигации при клике на меню', () => {
    const mockItem: IMenuItem = {
      key: '/about',
      label: 'About',
      icon: 'BankOutlined',
    };

    const result = menuBuilder.buildMenuObject([mockItem]);

    result[0].onClick!('/about');
    expect(navigateMock).toHaveBeenCalledWith('/about');
  });

  it('создание элемента без иконки', () => {
    const mockItem: IMenuItem = {
      key: '/contact',
      label: 'Contact',
    };

    const result = menuBuilder.buildMenuObject([mockItem]);

    expect(result).toEqual([
      {
        ...mockItem,
        icon: undefined,
        onClick: expect.any(Function),
      },
    ]);
  });

  it('Обрабатывает пустой список', () => {
    const result = menuBuilder.buildMenuObject([]);
    expect(result).toEqual([]);
  });
});
