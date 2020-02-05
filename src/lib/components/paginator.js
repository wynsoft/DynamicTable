import React, { Component } from "react";
import "./paginator.css";

class Paginator extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentPage: this.props.currentPage
    });
  }

  handlePageClick(event) {
    this.setState({ currentPage: +event.target.innerText });
    this.props.passClick(+event.target.innerText);
  }

  render() {
    let pageTabs = [];
    if (this.props.pageSize && this.props.totalSize) {
      let pages = Math.ceil(this.props.totalSize / this.props.pageSize);
      for (let p = 0; p < pages; p++) {
        let style = "";
        if (this.props.currentPage === p + 1) {
          style = "active";
        }
        pageTabs.push(
          <div
            key={p}
            className={"Paginator-page " + style}
            onClick={this.handlePageClick}
          >
            {p + 1}
          </div>
        );
      }
    }
    return <div className="Paginator-container">{pageTabs}</div>;
  }
}

export default Paginator;
