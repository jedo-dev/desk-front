import Keycloak from 'keycloak-js';
import { describe, expect, it, vi } from 'vitest';
import keycloak from './keycloak'; // Импортируем ваш модуль с инициализацией

// Мокаем Keycloak конструктор
vi.mock('keycloak-js', () => {
  return {
    default: vi.fn().mockImplementation((config) => ({
      init: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
      updateToken: vi.fn(),
      config,
    })),
  };
});

describe('Keycloak instance', () => {
  it('should be initialized with correct configuration', () => {
    const expectedConfig = {
      url: 'http://keycloak.udptest.cloudns.nz',
      realm: 'PABP',
      clientId: 'pabp-frontend-client',
    };

    // Проверяем, что Keycloak был вызван с нужной конфигурацией
    expect(Keycloak).toHaveBeenCalledWith(expectedConfig);
    const mockedKeycloak = keycloak as any;
    // Проверяем, что объект keycloak содержит ту же конфигурацию
    expect(mockedKeycloak.config).toEqual(expectedConfig);
  });
});
