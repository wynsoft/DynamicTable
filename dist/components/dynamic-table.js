import React, { Component } from "react";
import TableRow from "./table-row";

class DynamicTable extends Component {
  constructor() {
    super();
    this.state = {
      pageSize: 10,
      currentPage: 1,
      headers: null,
      data: null,
      sortInfo: {
        sortOn: "id",
        sortOrder: "ASC"
      }
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  getFieldIndex(fieldName) {
    return this.props.headers.findIndex(header => header.fieldName === fieldName);
  }

  componentDidMount() {
    this.setState({
      pageSize: this.props.pageSize,
      currentPage: this.props.currentPage,
      headers: this.props.headers,
      data: this.props.data,
      sortInfo: {
        sortOn: this.props.sortInfo.sortOn || "id",
        sortOrder: this.props.sortInfo.sortOrder || "ASC"
      }
    });
    this.handleHeaderClick(this.props.sortInfo.sortOn, this.getFieldIndex(this.props.sortInfo.sortOn), this.props.sortInfo.sortOrder);
  }

  handleHeaderClick(fieldName, idx, sortOrder) {
    const tmpData = this.state.data || this.props.data;
    const currentSortOrder = this.state.sortInfo.sortOrder;
    const nextSortOrder = currentSortOrder === "ASC" ? "DESC" : "ASC";
    const sortedData = tmpData.sort(this.sortOn(fieldName, idx, sortOrder));
    this.setState({
      data: sortedData,
      sortInfo: {
        sortOrder: nextSortOrder,
        sortOn: fieldName
      }
    });
  }

  sortOn(fieldName, idx, order) {
    var sortOrder = 1;

    if (order === "DESC") {
      sortOrder = -1;
    }

    return function (a, b) {
      if (sortOrder === -1) {
        if (a[idx][fieldName] > b[idx][fieldName]) {
          return -1;
        }

        if (a[idx][fieldName] < b[idx][fieldName]) {
          return 1;
        }

        return 0;
      } else {
        if (a[idx][fieldName] < b[idx][fieldName]) {
          return -1;
        }

        if (a[idx][fieldName] > b[idx][fieldName]) {
          return 1;
        }

        return 0;
      }
    };
  }

  render() {
    if (this.props.headers && this.props.data) {
      return React.createElement(TableRow, {
        headers: this.props.headers,
        data: this.props.data,
        pageSize: this.props.pageSize,
        currentPage: this.props.currentPage,
        passHeaderClick: this.handleHeaderClick,
        sortInfo: this.state.sortInfo
      });
    }
  }

}

export default DynamicTable;