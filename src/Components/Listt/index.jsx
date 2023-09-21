import { Button, Col, List, Row } from "antd";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Listt = ({ data, addIII }) => {
  useEffect(() => console.log(data, "data обновлена"), [data]);
  return (
    <Row justify={"center"}>
      <List
        style={{ width: "500px" }}
        size="small"
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item style={{ display: "block" }} key={uuidv4()}>
            <Row justify={"space-between"}>
              <Col>{item}</Col>
              <Col>
                <Button type="primary" onClick={() => addIII(index, item)}>
                  !!!
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Row>
  );
};

export default Listt;
