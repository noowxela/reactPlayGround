// import React from 'react';
import { React, useState } from 'react';

import { PageHeaderDiv } from '../../components/general';
import { Row, Col } from 'antd';

import SelectedFoods from "./SelectedFoods";
import FoodSearch from "./FoodSearch";

export default function FoodLookUpPage() {
  const [selectedFoods, setSelectedFoods] = useState([]);

  
  const removeFoodItem = itemIndex => {
    const filteredFoods = selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    setSelectedFoods(filteredFoods);
  };

  const addFood = food => {
    const newFoods = selectedFoods.concat(food);
    setSelectedFoods(newFoods);
  };

  return (
    <div className="dashboard-content-layout">
      <PageHeaderDiv title='FoodLookUp'/>
      <div className="management-content">
        <Row justify="center">
          <Col span={12}>
            <SelectedFoods
              foods={selectedFoods}
              onFoodClick={removeFoodItem}
            />
          </Col>
          <Col span={12}>
            <FoodSearch onFoodClick={addFood} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
