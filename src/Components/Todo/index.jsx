import { Row, Col, Button, List, Input, Checkbox, Popconfirm } from "antd";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEdit, endEdit, editTitle } from "../../Redux/actions/todoAction";

const ToDo = ({ item, deleteTask, editTask, changeStatus }) => {
  //const [title, setTitle] = useState({ task: item.title, isEdit: false });
  const title = useSelector((state) => state.todo[item.id] || {});
  console.log(title);
  const dispatch = useDispatch();
  //dispatch(editTitle(item.title))

  const handleEdit = () => {
    dispatch(endEdit(item.id));
    //setTitle((title) => ({ ...title, isEdit: !title.isEdit }));
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
              //onChange={(e) => setTitle((title) => ({ ...title, task: e.target.value }))}
              value={title.title === undefined ? item.title : title.title}
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
            {title.isEdit ? (
              <SaveOutlined onClick={() => handleEdit()} />
            ) : (
              <EditOutlined onClick={() => dispatch(startEdit(item.id))} />
              //<EditOutlined onClick={() => setTitle((title) => ({ ...title, isEdit: !title.isEdit }))} />
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
