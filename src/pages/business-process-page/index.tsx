import { BusinessProcessWrapper } from '@features';
import { BusinessForm } from './business-form';

export const businessProcessRouter = [
  {
    path: '/my-tasks/process/:id',
    element: (
      <BusinessProcessWrapper>
        <BusinessForm />
      </BusinessProcessWrapper>
    ),
  },
];
