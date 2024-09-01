import { FlexProps } from 'antd';

type flexOptions = {
  gap?: FlexProps['gap'];
  vertical?: boolean;
  justify?: FlexProps['justify'];
};

export interface IReusedCard {
  dataTestid?: string;
  keyCard: string;
  cardTitle: {
    title: string | React.ReactNode;
    extra?: React.ReactNode;
  };
  cardBody: {
    body: React.ReactNode;
    interactionButtons: {
      components: React.ReactNode[];
      flexOptions?: flexOptions;
    };
    extraInteractionElements?: {
      components: React.ReactNode;
      flexOptions?: flexOptions;
    };
    extraItems?: {
      component: React.ReactNode;
      flexOptions?: flexOptions;
    };
    flexOptions?: flexOptions;
  };
}
