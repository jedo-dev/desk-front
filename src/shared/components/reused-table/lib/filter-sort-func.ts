import { FilterValue } from 'antd/es/table/interface';

type filtersArrayProps = {
  filters?: Record<string, FilterValue | null>;
  compositeKeys?: { [key: string]: string };
};

type sortsArrayProps = {
  sorts?: {
    order: 'descend' | 'ascend' | undefined;
    field: string | string[];
  };
};

export const createFiltersArray = (props: filtersArrayProps) => {
  let filtersArray: {
    key: string;
    operator: string;
    field_type: string;
    value?: string | number | boolean | bigint;
    values?: string[] | number[] | boolean[] | bigint[];
  }[] = [];

  let incomingKeys: string[] = [];
  if (props.filters) {
    for (let key of Object.keys(props.filters)) {
      if (props.filters[key]) {
        if (props.filters[key].length === 1) {
          filtersArray.push({
            key: props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
            operator:
              typeof props.filters[key][0] === 'boolean' ||
              typeof props.filters[key][0] === 'number'
                ? 'EQUAL'
                : 'LIKE',
            field_type:
              typeof props.filters[key][0] === 'boolean'
                ? 'BOOLEAN'
                : typeof props.filters[key][0] === 'number'
                ? 'INTEGER'
                : 'STRING',
            value: props.filters[key][0],
          });
          incomingKeys.push(
            props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
          );
        } else {
          filtersArray.push({
            key: props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
            operator: 'IN',
            field_type:
              typeof props.filters[key][0] === 'boolean'
                ? 'BOOLEAN'
                : typeof props.filters[key][0] === 'number'
                ? 'INTEGER'
                : 'STRING',
            values:
              typeof props.filters[key][0] === 'boolean'
                ? props.filters[key].map((elem) => Boolean(elem))
                : typeof props.filters[key][0] === 'number'
                ? props.filters[key].map((elem) => Number(elem))
                : props.filters[key].map((elem) => elem.toString()),
          });
          incomingKeys.push(
            props.compositeKeys && key in props.compositeKeys ? props.compositeKeys[key] : key,
          );
        }
      }
    }
  }

  return {
    filtersArray: filtersArray,
    incomingKeys: incomingKeys,
  };
};

export const createSorstArray = (props: sortsArrayProps) => {
  if (props.sorts) {
    switch (props.sorts.order) {
      case 'ascend':
        return {
          key: Array.isArray(props.sorts?.field)
            ? props.sorts?.field.join('.')
            : props.sorts?.field,
          direction: 'ASC',
        };
      case 'descend':
        return {
          key: Array.isArray(props.sorts?.field)
            ? props.sorts?.field.join('.')
            : props.sorts?.field,
          direction: 'DESC',
        };
      default:
        return {
          key: Array.isArray(props.sorts?.field)
            ? props.sorts?.field.join('.')
            : props.sorts?.field,
        };
    }
  }
};
