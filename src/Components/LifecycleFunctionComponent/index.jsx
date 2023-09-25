import React from "react";
import { Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import CountClass from "../CountFunction";
import axios from 'axios';

const LifecycleFunctionComponent = React.memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Компонент смонтирован");
    const fetch = async () => {
      try {
        const response = await axios.get('https://todo-redev.herokuapp.com/api/users')
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetch()
    return () => console.log("Компонент удалён");
  }, []);

  useEffect(() => {
    console.log("Компонент обновлён");
  }, [count]);

  return (
    <div>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        +
      </Button>
      <CountClass count={count} />
      <Button type="primary" onClick={() => setCount((count) => count - 1)}>
        -
      </Button>
      <br />
      <br />
    </div>
  );
});

export default LifecycleFunctionComponent;
