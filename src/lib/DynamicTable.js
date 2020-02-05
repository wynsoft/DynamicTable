import React, { useState, useEffect } from "react";
import Table from "./components/dynamic-table";
import "./DynamicTable.css";
import Paginator from "./components/paginator";

const DynamicTable = props => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(props.currentPage);
  }, []);

  const handlePageClick = page => {
    setPage(page);
  };

  return (
    <div className="component-container">
      <Table
        headers={props.headers}
        data={props.data}
        pageSize={props.pageSize}
        currentPage={page || 1}
        sortInfo={{
          sortOn: props.sortOn,
          sortOrder: props.sortOrder
        }}
      />
      <Paginator
        pageSize={props.pageSize}
        totalSize={props.data.length}
        currentPage={page || 1}
        passClick={handlePageClick}
      />
    </div>
  );
};

export default DynamicTable;
