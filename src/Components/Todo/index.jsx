import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { editStatus, changeTask } from "../../Redux/slices/tasksSlice";
import { useDispatch } from "react-redux";
import {
  fetchDeleteTodo,
  fetchEditTodo,
  fetchEditStatusTodo,
} from "../../Requests/index";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const deleteTodo = (id) => dispatch(fetchDeleteTodo(id))
  const handleSave = (id, title) => {
    dispatch(fetchEditTodo(id, title));
    dispatch(editStatus(id))
  };
  const changeStatus = (id, isCompleted) => {
    dispatch(fetchEditStatusTodo(id, isCompleted))
  };
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {item.isEdit ? (
            <Input
              onPressEnter={() => handleSave(item.id, item.title)}
              onChange={(e) =>
                dispatch(changeTask({ id: item.id, title: e.target.value }))
              }
              value={item.title}
            />
          ) : (
            <Checkbox
              checked={item.isCompleted}
              onChange={() => changeStatus(item.id, item.isCompleted)}
            >
              {item.isCompleted ? (
                <span style={{ textDecoration: "line-through" }}>
                  {item.title}
                </span>
              ) : (
                <span>{item.title}</span>
              )}
            </Checkbox>
          )}
        </Col>
        <Col>
          <Button>
            {item.isEdit ? (
              <SaveOutlined onClick={() => handleSave(item.id, item.title)} />
            ) : (
              <EditOutlined onClick={() => dispatch(editStatus(item.id))} />
            )}
          </Button>
        </Col>
        <Col>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteTodo(item.id)}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "orange",
                }}
              />
            }
          >
            <Button>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </List.Item>
  );
};
export default ToDo;
