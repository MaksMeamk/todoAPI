import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const ToDo = ({ item, deleteTask, editTask, changeStatus }) => {
  const [title, setTitle] = useState(item.title);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit((value) => !value);
    editTask(item.id, title);
  };
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {isEdit ? (
            <Input
              onPressEnter={handleEdit}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          ) : (
            <Checkbox
              checked={item.isCompleted}
              onChange={() => changeStatus(item.id, item.isCompleted)}
            >
              {item.isCompleted ? (
                <span style={{ textDecoration: "line-through" }}>{title}</span>
              ) : (
                <span>{title}</span>
              )}
            </Checkbox>
          )}
        </Col>
        <Col>
          <Button>
            {isEdit ? (
              <SaveOutlined onClick={() => handleEdit()} />
            ) : (
              <EditOutlined onClick={() => setIsEdit((value) => !value)} />
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
