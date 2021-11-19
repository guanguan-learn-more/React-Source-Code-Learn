import * as React from "react";

// class EventDemo extends React.Component {
//   componentDidMount() {
//     document.getElementById("div-root").addEventListener("click", e => {
//       console.log("Events=====>div-root-原生事件");
//       e.stopPropagation();
//     });
//     document.getElementById("target-button").addEventListener("click", e => {
//         console.log("Events=====>target-button-原生事件");
//         // e.stopPropagation();
//     });
//   }
//   handleClick = (e) => {
//     console.log("Events=====>target-button点击-合成事件");
//     // e.stopPropagation();// 阻止合成事件冒泡
//   };
//   handleRootClick = (e) => {
//     console.log("Events=====>div-root-合成事件");
//   };
//   render() {
//     return (
//       <div id="div-root" onClick={this.handleRootClick}>
//         <button id="target-button" onClick={this.handleClick}>
//           react 事件
//         </button>
//       </div>
//     );
//   }
// }

class EventDemo extends React.Component {
  state = { count: 0 };
  onDemoClick = () => {
    console.log("Events=====>counter的点击事件被触发了");
    this.setState({
      count: this.state.count + 1,
    });
  };
  onParentClick = () => {
    console.log("Events=====>父级元素的点击事件被触发了");
  };
  onClickParentCapture = () => {
    console.log("Events=====>父级元素的点击事件onClickParentCapture被触发了");
  };

  render() {
    const { count } = this.state;
    return (
      <div
        className={"counter-parent"}
        onClick={this.onParentClick}
        onClickCapture={this.onClickParentCapture}
      >
        <div onClick={this.onDemoClick} className={"counter"}>
          {count}
        </div>
      </div>
    );
  }
}

export default EventDemo;
