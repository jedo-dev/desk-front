import { Col, DatePicker, Row, Select, Space, Tooltip, Typography } from 'antd';
const { Text } = Typography;

export const ExtraFilterButtons = () => {
  return (
    <Row gutter={6} style={{ marginBottom: 10 }}>
      <Space>
        <Col // Год
          span={24}>
          <Col span={24}>
            <Text className='textDate__basedDict' style={{ height: 37 }}>
              Год
            </Text>
          </Col>
          <Col span={24}>
            <DatePicker picker='year' />
          </Col>
        </Col>

        <Col // Отчетная кампания
          span={24}>
          <Col span={24}>
            <Text className='textDate__basedDict' style={{ height: 37 }}>
              Отчетная кампания
            </Text>
          </Col>
          <Col span={24}>
            <Tooltip title={'Выберите год'}>
              <Select />
            </Tooltip>
          </Col>
        </Col>
      </Space>
    </Row>
  );
};
