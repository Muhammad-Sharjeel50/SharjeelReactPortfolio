import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
import "./styles.css";
class App extends Component {
  state = {
    data: [],
    activePage: 1
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }
  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20`
      )
      .then(res => {
        this.setState({
          data: res.data
        });
      });
    this.setState({ activePage: pageNumber });
  };
  render() {
    const allData = this.state.data.map(item => {
      return <li key={item.id}>{item.title}</li>;
    });
    return (
      <div className="App">
        <p>React pagination test</p>
        <ul>{allData}</ul>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={1}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


