import { Button, Col, Input, Row } from "antd";
import { useState, useRef } from "react";
import Listt from "./Components/Listt";

function App() {
  const [data, setData] = useState(["яблоко", "груша", "персики"]);
  const [title, setTitle] = useState("");

  const addIII = (index, item) => {
    setData((data) => {
      data.splice(index, 1, `!!!${item}`);
      return [...data];
    });
  };
  const addItem = (title) => {
    setData((data) => [...data, title]);
    setTitle("");
  };
  const inputRef = useRef(null);
  return (
    <div className="App">
      <Row justify={"center"}>
        <Col>
          {" "}
          <Input
            ref={inputRef}
            placeholder="Введите элемент списка"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            onPressEnter={() => {
              addItem(title);
            }}
          />
        </Col>
        <Col>
          {" "}
          <Button type="primary" onClick={() => inputRef.current.focus()}>
            Focus
          </Button>
        </Col>
      </Row>
      <Listt data={data} addIII={addIII} />
    </div>
  );
}

export default App;
