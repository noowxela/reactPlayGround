import { React, useState } from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";

import SelectedFoods from "./SelectedFoods";
import FoodSearch from "./FoodSearch";

const { Header, Content } = Layout;

export default function FoodLookUpPage() {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const removeFoodItem = (itemIndex) => {
    const filteredFoods = selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    setSelectedFoods(filteredFoods);
  };

  const addFood = (food) => {
    const newFoods = selectedFoods.concat(food);
    setSelectedFoods(newFoods);
  };

  return (
    <Layout style={{ background: "transparent", minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        FoodLookUp
      </Header>
      <Content style={{ padding: "40px 32px" }}>
        <Row justify="center">
          <Col span={12}>
            <SelectedFoods foods={selectedFoods} onFoodClick={removeFoodItem} />
          </Col>
          <Col span={12}>
            <FoodSearch onFoodClick={addFood} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
