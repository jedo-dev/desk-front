import '@testing-library/jest-dom';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';

import { store, withReduxProvider } from '@app/providers/redux';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ReportsForm } from './ReportsForm';

const dispatchSpy = vi.spyOn(store, 'dispatch');

async function clickOnSelectorAndChooseOption(
  screen: RenderResult,
  selector: HTMLElement,
  title: string,
  titleIndex = 0,
) {
  userEvent.click(selector);
  await waitFor(() => {
    screen.getAllByTitle(title)[titleIndex];
  });
  fireEvent.click(screen.getAllByTitle(title)[titleIndex]);
}

vi.mock('@entities', async () => {
  const mod = await vi.importActual<typeof import('@entities')>('@entities');
  return {
    ...mod,
    useGetStationsQuery: vi.fn().mockReturnValue({
      data: { content: [{ label: 'Балаковская', value: 'BAL' }] },
    }),
    useGetPowerUnitsQuery: vi.fn().mockReturnValue({
      data: { content: [{ label: 'Блок', value: 'BLOCK' }] },
    }),
    useGetReportTypesQuery: vi.fn().mockReturnValue({
      data: { content: [{ label: 'Тип', value: 'TYPE' }] },
    }),
  };
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('ReportsForm', async () => {
  it('Должно рендерится три селектора', async () => {
    const screen = render(withReduxProvider(() => <ReportsForm />)());

    await waitFor(() => {
      expect(screen.getByText('АЭС')).toBeInTheDocument();
      expect(screen.getByText('Энергоблок')).toBeInTheDocument();
      expect(screen.getByText('Тип отчета')).toBeInTheDocument();
    });
  });

  it('При заполнении трех селекторов должен вызываться dispatch', async () => {
    const screen = render(withReduxProvider(() => <ReportsForm />)());
    const blockSelector = screen.getByLabelText('Энергоблок');
    const nppSelector = screen.getByLabelText('АЭС');
    const reportTypeSelector = screen.getByLabelText('Тип отчета');

    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская');
    await clickOnSelectorAndChooseOption(screen, blockSelector, 'Блок');
    await clickOnSelectorAndChooseOption(screen, reportTypeSelector, 'Тип');

    // //? Дообновим стейт (иначе стор не обновится последним выбранным селектором)
    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская', 1);
    // //? ---

    //? первые два раза - вызов dispatch для селекторов. Третий вызов dispatch для сохранение фильтров. Он и нужен
    expect(dispatchSpy).toHaveBeenCalledTimes(3);
  });

  it('При заполнении трех селекторов в сторе должны лежать нужные фильтры', async () => {
    const screen = render(withReduxProvider(() => <ReportsForm />)());

    const blockSelector = screen.getByLabelText('Энергоблок');
    const nppSelector = screen.getByLabelText('АЭС');
    const reportTypeSelector = screen.getByLabelText('Тип отчета');

    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская');
    await clickOnSelectorAndChooseOption(screen, blockSelector, 'Блок');
    await clickOnSelectorAndChooseOption(screen, reportTypeSelector, 'Тип');

    // //? Дообновим стейт (иначе стор не обновится последним выбранным селектором)
    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская', 1);
    // //? ---

    const state = store.getState().reportSliceReducer;
    expect(state.filter).toEqual({ npp: 'BAL', block: 'BLOCK', type: 'TYPE' });
  });

  it('При заполнении селекторы должны быть заполнены при выборе их options', async () => {
    const screen = render(withReduxProvider(() => <ReportsForm />)());

    const blockSelector = screen.getByLabelText('Энергоблок');
    const nppSelector = screen.getByLabelText('АЭС');
    const reportTypeSelector = screen.getByLabelText('Тип отчета');

    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская');
    await clickOnSelectorAndChooseOption(screen, blockSelector, 'Блок');
    await clickOnSelectorAndChooseOption(screen, reportTypeSelector, 'Тип');

    // //? Дообновим стейт (иначе стор не обновится последним выбранным селектором)
    await clickOnSelectorAndChooseOption(screen, nppSelector, 'Балаковская', 1);
    // //? ---

    await waitFor(() => {
      expect(screen.getAllByTitle('Балаковская')[0]).toBeInTheDocument();
      expect(screen.getAllByTitle('Блок')[0]).toBeInTheDocument();
      expect(screen.getAllByTitle('Тип')[0]).toBeInTheDocument();
    });
  });
});
