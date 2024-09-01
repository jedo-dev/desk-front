import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { stationsColumns } from './stations-columns';

matchMediaConfig;

describe('stations-columns', () => {
  it('конфигурация колонок соответсует макету', () => {
    expect(stationsColumns).toMatchSnapshot();
  });
});
