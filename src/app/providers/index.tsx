import compose from 'compose-function';
import { withAntdProvider } from './antd';
import { withReduxProvider } from './redux';
import { withRouter } from './with-router';

export const withProviders = compose(withReduxProvider, withAntdProvider, withRouter);
