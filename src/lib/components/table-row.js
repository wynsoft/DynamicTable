import React, { Component } from "react";
import "./table-row.css";

class TableRow extends Component {
  constructor() {
    super();
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(fieldName, idx, sortOrder) {
    this.props.passHeaderClick(fieldName, idx, sortOrder);
  }

  render() {
    let tableHeaders = "";
    let tableColumns = "";
    let tableAlignments = [];
    let tabAlignments = "";
    let dataFields = [];
    let fields = "";
    let dataRow = "";
    if (this.props.headers && this.props.data) {
      tabAlignments += this.props.headers.map(header => {
        return header.align;
      });
      tableAlignments = tabAlignments.split(",");
      fields += this.props.headers.map(header => {
        return header.fieldName;
      });
      dataFields = fields.split(",");
      tableColumns += this.props.headers.map(header => {
        return header.width;
      });
      let sortField = this.props.sortInfo.sortOn;
      let sortFieldOrder = this.props.sortInfo.sortOrder;
      let ascActive = sortFieldOrder === "ASC" ? "active" : "";
      let descActive = sortFieldOrder === "DESC" ? "active" : "";

      tableHeaders = this.props.headers.map((header, idx) => {
        return (
          <div
            key={idx}
            className="TableRow-header sort-table-sort"
            style={{ textAlign: header.align }}
          >
            <span
              className={
                "sort-arrow-up " +
                (header.fieldName === sortField ? ascActive : "")
              }
              onClick={this.handleHeaderClick.bind(
                null,
                header.fieldName,
                idx,
                "ASC"
              )}
            />
            <span
              className={
                "sort-arrow-down " +
                (header.fieldName === sortField ? descActive : "")
              }
              onClick={this.handleHeaderClick.bind(
                null,
                header.fieldName,
                idx,
                "DESC"
              )}
            />
            <div
              className="sort-noselect"
              onClick={this.handleHeaderClick.bind(
                null,
                header.fieldName,
                idx,
                sortFieldOrder === "ASC" ? "DESC" : "ASC"
              )}
            >
              {header.title}
            </div>
          </div>
        );
      });
      dataRow = this.props.data.map((dat, idx) => {
        let rows = "";
        let start =
          this.props.currentPage === 1
            ? 0
            : (this.props.currentPage - 1) * this.props.pageSize;
        let end = this.props.currentPage * this.props.pageSize;
        if (idx >= start && idx < end) {
          rows = dat.map((row, idx) => {
            let fieldValue = row[dataFields[idx]];
            if (row["fieldType"] === "currency") {
              fieldValue = new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD"
              }).format(row[dataFields[idx]]);
            }
            return (
              <div
                key={idx}
                className="TableRow-data"
                style={{ textAlign: tableAlignments[idx] }}
              >
                {fieldValue}
              </div>
            );
          });
        }
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
