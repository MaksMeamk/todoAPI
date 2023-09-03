import { Row, Col, Button, List } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons'
//<SaveOutlined />

const ToDo = ({ item }) => {

    return (
        <List.Item style={{ display: 'block' }}>
            <Row justify={'center'}>
                <Col span={13}><span>{item.title}</span></Col>
                <Col ><Button><EditOutlined /></Button></Col>
                <Col ><Button><DeleteOutlined /></Button></Col>
            </Row>
        </List.Item>
    )
}
export default ToDo;
