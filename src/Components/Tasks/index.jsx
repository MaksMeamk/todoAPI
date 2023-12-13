import React from "react";
import CustomInput from "../CustomInput";
import Todo from "../Todo";
import { Row, Col, List, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusLoad } from "../../Redux/slices/taskLoadSlice";
import { sort, load } from "../../Redux/slices/tasksSlice";

import { fetchLoadTasks } from "../../Requests/requests";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.taskLoad.load);

  useEffect(() => {
    dispatch(changeStatusLoad());
    fetchLoadTasks().then((response) => {
      if (response) {
        dispatch(load(response.data));
        dispatch(sort());
        dispatch(changeStatusLoad());
      }
    });
  }, []);

  const logOut = () => {
    navigate("/");
    localStorage.clear();
  };

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
              In progress: {tasks.filter((item) => !item.isCompleted).length}{" "}
            </span>
            <span style={{ color: "green" }}>
              Successe: {tasks.filter((item) => item.isCompleted).length}
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
        <Col>
          <Button type="primary" onClick={() => logOut()}>
            Log out
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Tasks;
