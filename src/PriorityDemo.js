import * as React from "react";

//demo1: 异步
class SetStateDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 0,
  };
  componentDidMount() {}
  handleAdd = () => {

    console.log("setState=====>点击【增加】之前count", this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log("setState=====>点击【增加】之后count", this.state.count);
  };
  handleAdd3Times = () => {
    console.log("setState=====>点击【累计增加3次】之前count", this.state.count);
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log("setState=====>点击【累计增加3次】之后count", this.state.count);
  };
  handleReduce = () => {
    console.log(
      "setState=====>点击【点击异步减少】之前count",
      this.state.count
    );
    this.setState({ count: this.state.count - 1 });
    console.log(
      "setState=====>点击【点击异步减少】之后count",
      this.state.count
    );
  };
  handleReduceSync = () => {
    setTimeout(() => {
      console.log(
        "setState=====>点击【点击异步减少】之前count",
        this.state.count
      );
      this.setState({ count: this.state.count - 1 });
      console.log(
        "setState=====>点击【点击异步减少】之后count",
        this.state.count
      );
    }, 0);
  };
  render() {
    return (
      <div className={"origin-demo"}>
        <div>{this.state.count}</div>
        <button onClick={this.handleAdd}>增加</button>
        <button onClick={this.handleAdd3Times}>累计增加3次</button>
        <button onClick={this.handleReduce}>点击异步减少</button>
        <button onClick={this.handleReduceSync}>点击同步减少</button>
      </div>
    );
  }
}

// class SetStateDemo extends React.Component {
//     constructor(props) {
//       super(props)
//       this.buttonRef = React.createRef();
//     }
//     state = {
//       count: 0
//     }
//     componentDidMount() {
//       const button = this.buttonRef.current
//       setTimeout( () => this.setState( { count: 1 } ), 500 )
//       setTimeout( () => button.click(), 600)
//       //   A2是常规优先级的更新，A1是button.click()产生高优先级的更新。
//       //   A后边的数字表示优先级，lane模型中，越小优先级越高，1 > 2。
//       //   updateQueue：A2 - A1
//       //                1    +2
//       //   以1的优先级来执行updateQueue，发现队列中第一个update A2 比当前的渲染优先级低，跳过它处理A1
//       //     Base state: 0
//       //     Updates: [A1]              <-  +2
//       //     Result state: 2
//       //
//       //   以2的优先级来执行updateQueue，队列中的update都会被处理，A1之前已经被处理过一次，所以A1会以不同的优先级处理两次
//       //     Base state: 0              <-  因为上次A2被跳过了，所以base state是A2之前的状态 0
//       //
//       //     Updates: [A2, A1]          <-  当A1被处理的时候，A2已经处理完了，在1的基础上进行+2操作
//       //               1   +2
//       //     Result state: 3
//     }
//     handleButtonClick = () => {
//       this.setState( prevState => {
//         return { count: prevState.count + 2 }
//       } )
//     }
//     render() {
//       return <div className={"origin-demo"}>
//         <p>不需要点击这个按钮，这个按钮是交给js去模拟点击用的，模拟点击之后产生的是高优先级任务</p>
//         <button ref={this.buttonRef} onClick={this.handleButtonClick}>增加2</button>
//         <div>
//           {Array.from(new Array(16000)).map( (v,index) =>
//             <div key={index}>{this.state.count}</div>
//           )}
//         </div>
//       </div>
//     }
//   }
export default SetStateDemo;
