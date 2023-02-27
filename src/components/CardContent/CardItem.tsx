import React from 'react';
import { Button, Card, Collapse, Space, Tag } from 'antd';
import ItemDetail from './ItemDetail';
import ItemType from './ItemType';
const { Panel } = Collapse;
const { Meta } = Card;


const CardItem: React.FC<{item: ItemType}> = (props) => (
  <Card
    hoverable
    style={{ width: '45%' }}
    cover={<img alt="example" src={props.item.image} style={{ height: '250px' }} />}
  >
    <Meta
      title={props.item.Company}
      description={props.item.Position + ' | ' + props.item.Location}
    />
    <br />
    <Space size={[0, 8]} wrap>
      {props.item.req.map((e) => {return (
        <Tag color="purple">{e}</Tag>
      )})}
    </Space>
    <Collapse
      defaultActiveKey={['1']}
      ghost
      style={{ width: '100%', margin: 0 }}
    >
      <Panel header="More Details" showArrow={false} key="1">
        <ItemDetail />
      </Panel>
    </Collapse>
    <Button type="dashed">Register</Button>
  </Card>
);

export default CardItem;
