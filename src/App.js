import React, { Component } from "react";
import DynamicTable from "./components/dynamic-table";
import Paginator from "./components/paginator";
import "./App.css";

class App extends Component {
  headers = [
    { title: "ID", width: "40px", align: "center", fieldName: "id" },
    {
      title: "First Name",
      width: "150px",
      align: "left",
      fieldName: "firstName"
    },
    {
      title: "Last Name",
      width: "150px",
      align: "left",
      fieldName: "lastName"
    },
    { title: "Address", width: "400px", align: "left", fieldName: "address" },
    { title: "Salary", width: "100px", align: "right", fieldName: "salary" }
  ];
  data = [
    [
      { id: 1 },
      { firstName: "George" },
      { lastName: "Benson" },
      { address: "125 Main St., Canton, Ohio" },
      { salary: 85000, fieldType: "currency" }
    ],
    [
      { id: 2 },
      { firstName: "Stacy" },
      { lastName: "Locksmith" },
      { address: "25-525 King St., Canton, Ohio" },
      { salary: 105000, fieldType: "currency" }
    ],
    [
      { id: 3 },
      { firstName: "Helen" },
      { lastName: "McKinley" },
      { address: "1400 23rd St. Unit 301, Canton, Ohio" },
      { salary: 65000, fieldType: "currency" }
    ],
    [
      { id: 4 },
      { firstName: "Robert" },
      { lastName: "Morrisey" },
      {
        address: "1240-7855 South Camber Rd., Canton, Ohio"
      },
      { salary: 70000.0, fieldType: "currency" }
    ],
    [
      { id: 5 },
      { firstName: "Carlos" },
      { lastName: "Mendez" },
      {
        address: "471 McArthur Ave., Apt. 123, Canton, Ohio"
      },
      { salary: 85000.0, fieldType: "currency" }
    ],
    [
      { id: 6 },
      { firstName: "Jody" },
      { lastName: "Whatley" },
      {
        address: "13/2 Steeley Dr., Apt. 1123, Canton, Ohio"
      },
      { salary: 45000.0, fieldType: "currency" }
    ],
    [
      { id: 7 },
      { firstName: "Kelly" },
      { lastName: "Wrapper" },
      {
        address: "2540 Jules Ava Rd., Unit 2012, Canton, Ohio"
      },
      { salary: 95000.0, fieldType: "currency" }
    ],
    [
      { id: 8 },
      { firstName: "Alfred" },
      { lastName: "Pinto" },
      {
        address: "715 McKenney Ave., Canton, Ohio"
      },
      { salary: 65000.0, fieldType: "currency" }
    ],
    [
      { id: 9 },
      { firstName: "Herman" },
      { lastName: "Hermett" },
      {
        address: "63 Schultz Cres., Canton, Ohio"
      },
      { salary: 55000.0, fieldType: "currency" }
    ],
    [
      { id: 10 },
      { firstName: "Sunil" },
      { lastName: "Chadda" },
      {
        address: "78 Polar Drums Blvd., Canton, Ohio"
      },
      { salary: 75000.0, fieldType: "currency" }
    ],
    [
      { id: 11 },
      { firstName: "Yoda" },
      { lastName: "Meringue" },
      {
        address: "1001 Gory Road, Canton, Ohio"
      },
      { salary: 55000.0, fieldType: "currency" }
    ],
    [
      { id: 12 },
      { firstName: "Jesse" },
      { lastName: "Jameson" },
      {
        address: "951 Holiday Dr., Apt. 115 , Canton, Ohio"
      },
      { salary: 78000.0, fieldType: "currency" }
    ],
    [
      { id: 13 },
      { firstName: "Keith" },
      { lastName: "DeSouza" },
      {
        address: "234 Paul Adams Blvd., Canton, Ohio"
      },
      { salary: 63000.0, fieldType: "currency" }
    ],
    [
      { id: 14 },
      { firstName: "Bosco" },
      { lastName: "Fernandez" },
      {
        address: "78/2-3 Greenwoods Parkway, Canton, Ohio"
      },
      { salary: 88000.0, fieldType: "currency" }
    ],
    [
      { id: 15 },
      { firstName: "Michael" },
      { lastName: "Braganza" },
      {
        address: "45-46 Hollander Court, Canton, Ohio"
      },
      { salary: 43000.0, fieldType: "currency" }
    ],
    [
      { id: 16 },
      { firstName: "Laura" },
      { lastName: "Behemoth" },
      {
        address: "657-1/2 Yanky Doodle Bend, Canton, Ohio"
      },
      { salary: 58000.0, fieldType: "currency" }
    ],
    [
      { id: 17 },
      { firstName: "Ignatius" },
      { lastName: "Smithosian" },
      {
        address: "87040 Country Road, Canton, Ohio"
      },
      { salary: 54500.0, fieldType: "currency" }
    ],
    [
      { id: 18 },
      { firstName: "Ruth" },
      { lastName: "Ramos" },
      {
        address: "43 Fodo Parkway, Canton, Ohio"
      },
      { salary: 68900.0, fieldType: "currency" }
    ],
    [
      { id: 19 },
      { firstName: "Cuca" },
      { lastName: "Estevan" },
      {
        address: "143 Fodo Blvd., Canton, Ohio"
      },
      { salary: 60900.0, fieldType: "currency" }
    ],
    [
      { id: 20 },
      { firstName: "Dudley" },
      { lastName: "Rueben" },
      {
        address: "1443-A St. Cloud St., Canton, Ohio"
      },
      { salary: 168900.0, fieldType: "currency" }
    ]
  ];

  constructor() {
    super();
    this.state = {
      pageSize: 10,
      currentPage: 1,
      headers: this.headers,
      data: this.data,
      sortOn: "id",
      sortOrder: "ASC"
    };
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleHeaderChange(event) {
    this.setState({ headers: JSON.parse(event.target.value) });
    event.preventDefault();
  }

  handleDataChange(event) {
    this.setState({ data: JSON.parse(event.target.value) });
  }

  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  handleHeaderClick = (fieldName, idx, sortOrder) => {
    const tmpData = this.state.data;
    const currentSortOrder = this.state.sortOrder;
    const nextSortOrder = currentSortOrder === "ASC" ? "DESC" : "ASC";
    const sortedData = tmpData.sort(this.sortOn(fieldName, idx, sortOrder));
    this.setState({
      data: sortedData,
      sortOrder: nextSortOrder,
      sortOn: fieldName
    });
  };

  sortOn(fieldName, idx, order) {
    var sortOrder = 1;

    if (order === "DESC") {
      sortOrder = -1;
    }
    return function(a, b) {
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
    let headers = JSON.stringify(this.state.headers, null, 2);
    let data = JSON.stringify(this.state.data, null, 2);
    return (
      <div className="App">
        <h1>Dynamic Table Component</h1>
        <h4>(This is a work in progress. More features to come.)</h4>
        <div className="component-container" onChange={this.handlePageClick}>
          <DynamicTable
            headers={this.state.headers}
            data={this.state.data}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            passHeaderClick={this.handleHeaderClick}
            sortInfo={{
              sortOn: this.state.sortOn,
              sortOrder: this.state.sortOrder
            }}
          />
          <Paginator
            pageSize={this.state.pageSize}
            totalSize={this.state.data.length}
            currentPage={this.state.currentPage}
            passClick={this.handlePageClick}
          />
        </div>
        <br />
        <div className="test-container">
          <h3>Testing the Component:</h3>
          <p>
            Change the data in the text below. Pay close attention to the data
            attributes.
          </p>
          <div className="flex-grid">
            <div>
              <h5>Headers:</h5>
              <textarea value={headers} onChange={this.handleHeaderChange} />
            </div>
            <div>
              <h5>Data:</h5>
              <textarea value={data} onChange={this.handleDataChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
