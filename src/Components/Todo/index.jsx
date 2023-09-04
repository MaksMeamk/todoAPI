import { Row, Col, Button, List, Input } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
//<SaveOutlined />

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
            <Input onChange={(e) => setTitle(e.target.value)} value={title} />
          ) : (
            <span>{title}</span>
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
          <Button>
            <DeleteOutlined
              onClick={() => {
                deleteTask(item.id);
              }}
            />
          </Button>
        </Col>
      </Row>
    </List.Item>
  );
};
export default ToDo;
