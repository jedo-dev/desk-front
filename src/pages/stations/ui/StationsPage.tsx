import { stationsDataSource } from '../configs/data-source';
import { StationsCardWrapper } from './stations-card/StationsCardWrapper';
import { StationsForm } from './stations-form/StationsForm';

export const StationsPage: React.FC = () => {
  return (
    <div data-testid='StationsPageTest'>
      <StationsCardWrapper dataSource={stationsDataSource} />
      <StationsForm />
    </div>
  );
};
