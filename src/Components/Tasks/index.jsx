import React from "react";
import CustomInput from "../CustomInput";
import Todo from "../Todo";
import { Row, Col, List, Button } from "antd";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchLoadTasks } from "../../Requests/index";
import LogOut from "../LogOut";

const Tasks = () => {
  const { data: tasks, isLoad } = useSelector((state) => state.tasks);
  const inProgress = tasks.filter((item) => !item.isCompleted).length;
  const successe = tasks.filter((item) => item.isCompleted).length;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLoadTasks())
  }, []);
  return (
    <>
      <Row justify="center">
        <Col>
          <h1>What's the plan for today</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <h2>
            All: {tasks.length}{" "}
            <span style={{ color: "orange" }}>
              In progress: {inProgress + " "}
            </span>
            <span style={{ color: "green" }}>
              Successe: {successe}
            </span>
          </h2>
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
            loading={isLoad}
            size="large"
            bordered
            dataSource={tasks}
            renderItem={(item) => <Todo key={item.id} item={item} />}
          />
        </Col>
        <LogOut />
        {/* <Col>
          <Button type="primary" onClick={() => logOut()}>
            Log out
          </Button>
        </Col> */}
      </Row>
    </>
  );
};
export default Tasks;
