import { reactorTypesDataSource } from '../configs/data-source';
import { ReactorTypesCard } from './reactor-types-card/ReactorTypesCard';
import { ReactorTypesForm } from './reactor-types-form/ReactorTypesForm';

export const ReactorTypesPage: React.FC = () => {
  return (
    <div data-testid='ReactorTypesPageTest'>
      <ReactorTypesCard dataSource={reactorTypesDataSource} />
      <ReactorTypesForm />
    </div>
  );
};
