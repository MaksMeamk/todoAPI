import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { editStatus, changeTask } from "../../Redux/actions/tasksAction";

const ToDo = ({ item, deleteTask, editTask, changeStatus }) => {

  const handleSave = () => {
    dispatch(editStatus(item.id))
    editTask(item.id, item.title)
  }
  const dispatch = useDispatch();
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {item.isEdit ? (
            <Input
              onPressEnter={() => handleSave()}
              onChange={(e) => dispatch(changeTask(item.id, e.target.value))}
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
              <SaveOutlined onClick={() => handleSave()} />
            ) : (
              <EditOutlined onClick={() => dispatch(editStatus(item.id))} />
            )}
          </Button>
        </Col>
        <Col>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteTask(item.id)}
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
