import ReactDOM from 'react-dom/client';

import keycloak from '@app/providers/keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{ onLoad: 'login-required', pkceMethod: 'S256' }}
    // LoadingComponent={<LoaderRos />}
    onTokens={async (token) => {
      await (token.idToken && sessionStorage.setItem('access_token', token.idToken));
      await (token.token && sessionStorage.setItem('tokenSap', token.token));
    }}>
    <App />
  </ReactKeycloakProvider>,
);
