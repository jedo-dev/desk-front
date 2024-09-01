import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { EditButton } from './EditButton';
import { ViewButton } from './ViewButton';
import { DeleteButton } from './DeleteButton';
matchMediaConfig;

describe('actionTabaleButtons', () => {
  it('кнопки отобразились на экране', async () => {
    render(
      <>
        <EditButton showButton={true} dataTestId='editButtonTest' />
        <ViewButton showButton={true} dataTestId='viewButtonTest' />
        <DeleteButton showButton={true} dataTestId='deleteButtonTest' />
      </>,
    );

    fireEvent.mouseOver(screen.getByTestId('editButtonTest'));
    expect(await screen.findByText('Редактировать')).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByTestId('viewButtonTest'));
    expect(await screen.findByText('Просмотр')).toBeInTheDocument();

    fireEvent.mouseOver(screen.getByTestId('deleteButtonTest'));
    expect(await screen.findByText('Удалить')).toBeInTheDocument();
  });

  it('кнопки не отобразились на экране', async () => {
    render(
      <>
        <EditButton showButton={false} dataTestId='editButtonTest' />
        <ViewButton showButton={false} dataTestId='viewButtonTest' />
        <DeleteButton showButton={false} dataTestId='deleteButtonTest' />
      </>,
    );

    waitFor(() => {
      expect(screen.findByTestId('editButtonTest')).not.toBeInTheDocument();
      expect(screen.findByTestId('viewButtonTest')).not.toBeInTheDocument();
      expect(screen.findByTestId('deleteButtonTest')).not.toBeInTheDocument();
    });
  });
});
