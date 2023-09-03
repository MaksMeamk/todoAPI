import React from "react";
import CustomInput from "../CustomInput";
import Todo from "../Todo";
import { Row, Col, List } from 'antd'
import { useEffect, useState } from "react";

const Tasks = () => {
  const [response, setResponse] = useState([])


  const token = localStorage.getItem('token')
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch(
          "https://todo-redev.herokuapp.com/api/todos",
          {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        const response = await request.json();
        if (!response) {
          throw new Error("request error");
        }
        else {
          setResponse(response);
        }
      }
      catch (error) {
        alert(error);
      }
    }
    fetchData();
  });

  return (
    <>
      <Row justify="center">
        <Col>
          <h1>What's the plan for today</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={15}>
          <CustomInput />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <List
            size="large"
            bordered
            dataSource={response}
            renderItem={(item) => <Todo key={item.id} item={item} />}
          />
        </Col>
      </Row>


    </>
  );
}
export default Tasks;
