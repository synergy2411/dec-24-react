import { Component } from "react";

class DemoClassBased extends Component {
  state = {
    toggle: false,
  };

  constructor() {
    super();
    console.log("Constructuor");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  toggleChangeHandler = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    console.log("Render");
    return (
      <>
        <h1>Class based Component loaded...</h1>
        <button className="btn btn-primary" onClick={this.toggleChangeHandler}>
          Toggle
        </button>
        {this.state.toggle && <p>This paragraph will dynamically appear.</p>}
      </>
    );
  }
}

export default DemoClassBased;
