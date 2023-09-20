import React from "react";
import { Button } from "antd";

class LifecycleClassComponent extends React.PureComponent {
  componentDidMount() {
    console.log("Компонент смонтирован");
  }
  componentDidUpdate() {
    console.log("Компонент обновлён");
  }
  componentWillUnmount() {
    console.log("Компонент удалён");
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.setState((stat) => ({ count: stat.count + 1 }))}
        >
          +
        </Button>
        <span style={{ display: "inline-block", width: "30px" }}>
          {this.state.count}
        </span>
        <Button
          type="primary"
          onClick={() => this.setState((stat) => ({ count: stat.count - 1 }))}
        >
          -
        </Button>
        <br />
        <br />
      </div>
    );
  }
}

export default LifecycleClassComponent;
