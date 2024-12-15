import { Component } from "react";

class DemoClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      posts: [],
    };
    console.log("Constructuor", this.props);
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate");
    // console.log("Next Props : ", nextProps);
    // console.log("Next State : ", nextState);
    // return nextProps.counter % 2 == 0 && nextState.toggle === true;
    return true;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  toggleChangeHandler = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    console.log("Render");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((posts) => this.setState({ posts }));
    return (
      <>
        <h1>Class based Component loaded...</h1>
        <button className="btn btn-primary" onClick={this.toggleChangeHandler}>
          Toggle
        </button>
        {this.state.toggle && <p>This paragraph will dynamically appear.</p>}

        <hr />

        <ul>
          {this.state.posts.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default DemoClassBased;
