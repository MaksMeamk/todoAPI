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
  const [title, setTitle] = useState({task:item.title, isEdit: false});
  
  const handleEdit = () => {
    setTitle((title) => ({...title, isEdit:!title.isEdit }));
    editTask(item.id, title.task);
  };
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {title.isEdit ? (
            <Input
              onPressEnter={handleEdit}
              onChange={(e) => setTitle((title) => ({...title, task:e.target.value }))}
              value={title.task}
            />
          ) : (
            <Checkbox
              checked={item.isCompleted}
              onChange={() => changeStatus(item.id, item.isCompleted)}
            >
              {item.isCompleted ? (
                <span style={{ textDecoration: "line-through" }}>{title}</span>
              ) : (
                <span>{title.task}</span>
              )}
            </Checkbox>
          )}
        </Col>
        <Col>
          <Button>
            {title.isEdit ? (
              <SaveOutlined onClick={() => handleEdit()} />
            ) : (
              <EditOutlined onClick={() => setTitle((title) => ({...title, isEdit:!title.isEdit }))} />
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
