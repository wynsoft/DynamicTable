import React, { Component } from "react";
import TableRow from "./table-row";

class DynamicTable extends Component {
  render() {
    if (this.props.headers && this.props.data) {
      return <TableRow headers={this.props.headers} data={this.props.data} />;
    }
  }
}

export default DynamicTable;
