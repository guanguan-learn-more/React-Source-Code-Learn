import * as React from "react";

class EventDemo extends React.Component {
  componentDidMount() {
    document
      .getElementById("btn-reactandnative")
      .addEventListener("click", e => {
        console.log("原生+react 事件:  原生事件执行");
      });
  }
  handleNativeAndReact = e => {
    console.log("原生+react 事件:  当前执行react事件");
  };
  handleClick = e => {
    console.log("button click");
  };
  render() {
    return (
      <div>
        <button id="btn-confirm" onClick={this.handleClick}>
          react 事件
        </button>

        <button id="btn-reactandnative">原生 + react 事件</button>
      </div>
    );
  }
}

export default EventDemo;