import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { reactorTypesColumns } from './reactor-types-columns';

matchMediaConfig;

describe('stations-columns', () => {
  it('конфигурация колонок соответсует макету', () => {
    expect(reactorTypesColumns).toMatchSnapshot();
  });
});
