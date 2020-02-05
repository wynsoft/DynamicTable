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
        return React.createElement("div", {
          key: idx,
          className: "TableRow-header sort-table-sort",
          style: {
            textAlign: header.align
          }
        }, React.createElement("span", {
          className: "sort-arrow-up " + (header.fieldName === sortField ? ascActive : ""),
          onClick: this.handleHeaderClick.bind(null, header.fieldName, idx, "ASC")
        }), React.createElement("span", {
          className: "sort-arrow-down " + (header.fieldName === sortField ? descActive : ""),
          onClick: this.handleHeaderClick.bind(null, header.fieldName, idx, "DESC")
        }), React.createElement("div", {
          className: "sort-noselect",
          onClick: this.handleHeaderClick.bind(null, header.fieldName, idx, sortFieldOrder === "ASC" ? "DESC" : "ASC")
        }, header.title));
      });
      dataRow = this.props.data.map((dat, idx) => {
        let rows = "";
        let start = this.props.currentPage === 1 ? 0 : (this.props.currentPage - 1) * this.props.pageSize;
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

            return React.createElement("div", {
              key: idx,
              className: "TableRow-data",
              style: {
                textAlign: tableAlignments[idx]
              }
            }, fieldValue);
          });
        }

        return React.createElement("div", {
          className: "TableRow-data-container",
          key: idx,
          style: {
            gridTemplateColumns: tableColumns.split(",").join(" ")
          }
        }, rows);
      });
      return React.createElement("div", null, React.createElement("div", {
        className: "TableRow-header-container",
        style: {
          gridTemplateColumns: tableColumns.split(",").join(" ")
        }
      }, tableHeaders), dataRow);
    } else {
      return React.createElement("div", null, "No headers or data provided.");
    }
  }

}

export default TableRow;