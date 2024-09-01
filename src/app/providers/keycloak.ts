import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
  url: 'http://keycloak.udptest.cloudns.nz',
  realm: 'PABP',
  clientId: 'pabp-frontend-client',
});

export default keycloak;
