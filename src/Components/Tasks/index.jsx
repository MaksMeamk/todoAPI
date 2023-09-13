import React from "react";
import CustomInput from "../CustomInput";
import Todo from "../Todo";
import { Row, Col, List, Button, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [isLoad, setIsLoad] = useState(false);
  const deleteTask = async (id) => {
    try {
      const request = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json();
      if (!response) {
        throw new Error("request error");
      }
      if (response.message) {
        alert(response.message);
      } else {
        fetchData();
      }
    } catch (error) {
      alert(error);
    }
  };
  const editTask = async (id, title) => {
    try {
      const request = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
          }),
        }
      );
      const response = await request.json();

      if (!response) {
        throw new Error("request error");
      }

      if (response.hasOwnProperty("success")) {
        if (Array.isArray(response.errors)) {
          response.errors.forEach((item) => {
            alert(`${item.param} - ${item.msg}`);
          });
        }
      } else if (response.message) {
        alert(response.message);
      } else {
        fetchData();
      }
    } catch (error) {
      alert(error);
    }
  };
  const changeStatus = async (id, isCompleted) => {
    try {
      const request = await fetch(
        `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            isCompleted: !isCompleted,
          }),
        }
      );
      const response = await request.json();

      if (!response) {
        throw new Error("request error");
      }
      if (response.message) {
        alert(response.message);
      } else {
        fetchData();
      }
    } catch (error) {
      alert(error);
    }
  };

  const token = localStorage.getItem("token");
  async function fetchData() {
    setIsLoad((isLoad) => !isLoad);
    try {
      const request = await fetch(
        "https://todo-redev.herokuapp.com/api/todos",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json();
      if (!response) {
        throw new Error("request error");
      }
      if (response.message) {
        alert(response.message);
      }
      if (Array.isArray(response)) {
        setIsLoad((isLoad) => !isLoad);
        setTasks([
          ...response.filter((item) => !item.isCompleted),
          ...response.filter((item) => item.isCompleted),
        ]);
        console.log(response);
      }
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    fetchData();
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
              In progress:{" "}
              {tasks.filter((item) => !item.isCompleted ).length}{" "}
            </span>
            <span style={{ color: "green" }}>
              Successe:{" "}
              {tasks.filter((item) => item.isCompleted).length}
            </span>
          </h2>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={15}>
          <CustomInput fetchData={fetchData} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <List
            loading={isLoad}
            size="large"
            bordered
            dataSource={tasks}
            renderItem={(item) => (
              <Todo
                key={item.id}
                item={item}
                deleteTask={deleteTask}
                editTask={editTask}
                changeStatus={changeStatus}
              />
            )}
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
