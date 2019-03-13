import React, { Component } from "react";
import TableRow from "./table-row";

class DynamicTable extends Component {
  handleHeaderClick = (fieldName, idx, sortOrder) => {
    this.props.passHeaderClick(fieldName, idx, sortOrder);
  };

  render() {
    if (this.props.headers && this.props.data) {
      return (
        <TableRow
          headers={this.props.headers}
          data={this.props.data}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          passHeaderClick={this.handleHeaderClick}
          sortInfo={this.props.sortInfo}
        />
      );
    }
  }
}

export default DynamicTable;
