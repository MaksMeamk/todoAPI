import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  fetchDeleteTodo,
  fetchEditTodo,
  fetchEditStatusTodo,
} from "../../Requests/index";
import { useState } from "react";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const deleteTodo = (id) => dispatch(fetchDeleteTodo(id))
  const handleSave = (id, title) => {
    dispatch(fetchEditTodo({ id, title }));
    setDataEdit(dataEdit => ({ ...dataEdit, isEdit: !dataEdit.isEdit }))
  };
  const changeStatus = (id, isCompleted) => {
    dispatch(fetchEditStatusTodo({ id, isCompleted }))
  };
  const [dataEdit, setDataEdit] = useState({ title: item.title, isEdit: false })
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {dataEdit.isEdit ? (
            <Input
              onPressEnter={() => handleSave(item.id, dataEdit.title)}
              onChange={(e) => setDataEdit(dataEdit => ({ ...dataEdit, title: e.target.value }))}
              value={dataEdit.title}
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
            {dataEdit.isEdit ? (
              <SaveOutlined onClick={() => handleSave(item.id, dataEdit.title)} />
            ) : (
              <EditOutlined onClick={() => setDataEdit(dataEdit => ({ ...dataEdit, isEdit: !dataEdit.isEdit }))} />
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
