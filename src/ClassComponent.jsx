import React from "react";

class ClassComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
  componentDidCatch(error, info) {}
  constructor(props) {
    super(props);
    this.state = { changeName: this.props.name };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.changeName);
    this.setState((state) => ({ changeName: state.changeName + "ssssss" }));
  }
  render() {
    return (
      <>
        <div>{this.state.changeName}</div>
        <button onClick={this.handleClick}>ChangeName</button>
      </>
    );
  }
}

export default ClassComponent;
