import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { startEdit, endEdit, editTitle } from "../../Redux/actions/todoAction";

const ToDo = ({ item, deleteTask, editTask, changeStatus }) => {
  const title = useSelector((state) => state.todo[item.id] || {});
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(endEdit(item.id));
    editTask(item.id, title.title);
  };
  return (
    <List.Item style={{ display: "block" }}>
      <Row justify={"center"}>
        <Col span={13}>
          {title.isEdit ? (
            <Input
              onPressEnter={handleEdit}
              onChange={(e) => dispatch(editTitle(item.id, e.target.value))}
              value={title.title ? title.title : item.title}
            />
          ) : (
            <Checkbox
              checked={item.isCompleted}
              onChange={() => changeStatus(item.id, item.isCompleted)}
            >
              {item.isCompleted ? (
                <span style={{ textDecoration: "line-through" }}>
                  {title.title ? title.title : item.title}
                </span>
              ) : (
                <span>{title.title ? title.title : item.title}</span>
              )}
            </Checkbox>
          )}
        </Col>
        <Col>
          <Button>
            {title.isEdit ? (
              <SaveOutlined onClick={() => handleEdit()} />
            ) : (
              <EditOutlined onClick={() => dispatch(startEdit(item.id))} />
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
