import { Row } from 'antd';
import React from 'react';
import CardItem from '../CardContent/CardItem';
import ItemType from '../CardContent/ItemType';

const jobs: ItemType[] = [
  {
    Company: 'Google',
    Position: 'SDE Intern',
    Location: 'Banglore',
    Salary: '15-20 LPA',
    image:
      'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=1390&crop=1',
    req: ['ReactJs', 'FrontEnd', 'Intern'],
  },
  {
    Company: 'MicroSoft',
    Position: 'SDE 2',
    Location: 'Banglore',
    Salary: '20-35 LPA',
    image:
      'https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1354846583.jpeg?w=1390&crop=1',
    req: ['NodeJs', 'BackEnd', 'SDE 2'],
  },
  {
    Company: 'Oracle',
    Position: 'Product Manager',
    Location: 'Banglore',
    Salary: '15-20 LPA',
    image:
      'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/FXC2MIW2L5KWPDQ3XBRX2TF7FE.jpg',
    req: ['Experienced'],
  },
  {
    Company: 'Google',
    Position: 'SDE Intern',
    Location: 'Banglore',
    Salary: '15-20 LPA',
    image:
      'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=1390&crop=1',
    req: ['ReactJs', 'FrontEnd', 'Intern'],
  },
];

const Opportunities = () => {
  return (
    <>
      <Row  gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify={'space-between'} wrap>
        {jobs.map((item) => (
          <CardItem item={item} />
        ))}
      </Row>
    </>
  );
};

export default Opportunities;
