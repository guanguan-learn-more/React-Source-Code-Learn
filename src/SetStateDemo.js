import * as React from "react";



class SetStateDemo extends React.Component {
    constructor(props) {
        super(props);
      }
      state = {
        count: 0,
      };
  
    componentDidMount() {
      console.log("setState=====>componentDidMount");
  
      this.setState({ count: this.state.count + 1 });
      console.log('setState=====>1',this.state.count);   // 0
  
      this.setState({ count: this.state.count + 1 });
      console.log('setState=====>2',this.state.count);   // 0
  
      setTimeout(_ => {
        this.setState({ count: this.state.count + 1 });
        console.log('setState=====>3',this.state.count); // 2
  
        this.setState({ count: this.state.count + 1 });
        console.log('setState=====>4',this.state.count); // 3
      }, 0);
    }
  
    increment = () => {
      console.log("increment");
      this.setState({ count: this.state.count + 1 });
      console.log('setState=====>4',this.state.count);  // 3
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);  // 3
    };
  
    render() {
      console.log("render");
      return <button onClick={this.increment}>{this.state.count}</button>;
    }
  }
  
export default SetStateDemo;
