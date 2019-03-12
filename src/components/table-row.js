import React, { Component } from "react";
import "./table-row.css";

class TableRow extends Component {
  render() {
    let tableHeaders = "";
    let tableColumns = "";
    let dataRow = "";
    if (this.props.headers && this.props.data) {
      tableColumns += this.props.headers.map(header => {
        return header.width;
      });
      tableHeaders = this.props.headers.map(header => {
        return (
          <div
            key={header.title}
            className="TableRow-header"
            style={{ textAlign: header.align }}
          >
            {" "}
            {header.title}
          </div>
        );
      });
      dataRow = this.props.data.map((dat, idx) => {
        let rows = dat.map((row, idx) => {
          return (
            <div
              key={idx}
              className="TableRow-data"
              style={{ textAlign: row.align }}
            >
              {row.columnData}
            </div>
          );
        });
        return (
          <div
            className="TableRow-data-container"
            key={idx}
            style={{ gridTemplateColumns: tableColumns.split(",").join(" ") }}
          >
            {rows}
          </div>
        );
      });

      return (
        <div>
          <div
            className="TableRow-header-container"
            style={{ gridTemplateColumns: tableColumns.split(",").join(" ") }}
          >
            {tableHeaders}
          </div>
          {dataRow}
        </div>
      );
    } else {
      return <div>No headers or data provided.</div>;
    }
  }
}

export default TableRow;
