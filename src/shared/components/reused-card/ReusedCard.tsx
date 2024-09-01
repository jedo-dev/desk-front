import { Card, Flex } from 'antd';
import { IReusedCard } from './model/reused-card.model';
import style from './styles/reused-card.module.css';

export const ReusedCard: React.FC<IReusedCard> = (props) => {
  return (
    <Card
      data-testid={props.dataTestid}
      title={props.cardTitle.title}
      extra={props.cardTitle.extra}
      key={props.keyCard || Date.now().toString(36) + Math.random().toString(36).substring(2)}>
      {/* секция дополнительных элементов над основными кнопками */}
      {props.cardBody.extraItems && (
        <Flex
          vertical={props.cardBody.extraItems.flexOptions?.vertical || false}
          justify={props.cardBody.extraItems.flexOptions?.justify || 'flex-end'}
          className={style.flex_withExtraItems}>
          {props.cardBody.extraItems.component}
        </Flex>
      )}

      {/* секция с основными кнопками и элементами для взаимодействия */}
      <Flex
        vertical={props.cardBody.flexOptions?.vertical || false}
        justify={props.cardBody.extraInteractionElements && 'space-between'}
        className={style.flex_withInteractiveElements}
        {...props.cardBody.flexOptions}>
        {/* дополнительные элементы слева от кнопок */}
        {props.cardBody.extraInteractionElements && (
          <Flex
            gap={props.cardBody.extraInteractionElements.flexOptions?.gap || 'middle'}
            vertical={props.cardBody.extraInteractionElements.flexOptions?.vertical || false}
            justify={props.cardBody.extraInteractionElements.flexOptions?.justify || 'flex-start'}
            align='center'
            className={style.flex_extraInteractionElements}
            {...props.cardBody.extraInteractionElements.flexOptions}>
            {props.cardBody.extraInteractionElements.components}
          </Flex>
        )}

        {/* секция с основными кнопками */}
        <Flex
          gap={props.cardBody.interactionButtons.flexOptions?.gap || 'middle'}
          vertical={props.cardBody.interactionButtons.flexOptions?.vertical || false}
          justify={props.cardBody.interactionButtons.flexOptions?.justify || 'flex-end'}
          align='center'
          className={style.flex_interactionButtons}
          {...props.cardBody.interactionButtons.flexOptions}>
          {props.cardBody.interactionButtons.components.map((elem) => elem)}
        </Flex>
      </Flex>
      {props.cardBody.body}
    </Card>
  );
};
