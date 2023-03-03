import React from 'react';
import ItemType from './ItemType';

const ItemDetail: React.FC<{ item: ItemType }> = (props) => {
  return <div>Salary: {props.item.Salary}</div>;
};

export default ItemDetail;
