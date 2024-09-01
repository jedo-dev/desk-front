import { ReusedCard } from '@shared/components';
import styles from '../../styles/ReportCard.module.css';
import { ReportsForm } from '../reports-form/ReportsForm';
import { ReportsTableWrapper } from '../reports-table/ReportsTableWrapper';

export const ReportsCard = () => {
  const title = <span className={styles.card_title}>Отчетность</span>;

  return (
    <>
      <ReusedCard
        keyCard='reportsCard'
        cardTitle={{ title: title }}
        cardBody={{
          interactionButtons: {
            components: [],
          },
          extraInteractionElements: {
            components: [<ReportsForm />],
          },
          body: <ReportsTableWrapper />,
        }}
      />
    </>
  );
};
