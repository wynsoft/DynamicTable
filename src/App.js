import React, { Component } from "react";
import DynamicTable from "./components/dynamic-table";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      data: []
    };
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    //    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      headers: [
        { title: "ID", width: "40px", align: "center" },
        { title: "First Name", width: "150px", align: "left" },
        { title: "Last Name", width: "150px", align: "left" },
        { title: "Address", width: "400px", align: "left" },
        { title: "Salary", width: "100px", align: "right" }
      ],
      data: [
        [
          { columnData: 1, align: "center" },
          { columnData: "George", align: "left" },
          { columnData: "Benson", align: "left" },
          { columnData: "125 Main St., Canton, Ohio", align: "left" },
          { columnData: "$85,000.00", align: "right" }
        ],
        [
          { columnData: 2, align: "center" },
          { columnData: "Stacy", align: "left" },
          { columnData: "Locksmith", align: "left" },
          { columnData: "25-525 King St., Canton, Ohio", align: "left" },
          { columnData: "$105,000.00", align: "right" }
        ],
        [
          { columnData: 3, align: "center" },
          { columnData: "Helen", align: "left" },
          { columnData: "McKinley", align: "left" },
          { columnData: "1400 23rd St. Unit 301, Canton, Ohio", align: "left" },
          { columnData: "$65,000.00", align: "right" }
        ],
        [
          { columnData: 4, align: "center" },
          { columnData: "Robert", align: "left" },
          { columnData: "Morrisey", align: "left" },
          {
            columnData: "1240-7855 South Camber Rd., Canton, Ohio",
            align: "left"
          },
          { columnData: "$70,000.00", align: "right" }
        ],
        [
          { columnData: 5, align: "center" },
          { columnData: "Carlos", align: "left" },
          { columnData: "Mendez", align: "left" },
          {
            columnData: "471 McArthur Ave., Apt. 123, Canton, Ohio",
            align: "left"
          },
          { columnData: "$85,000.00", align: "right" }
        ]
      ]
    });
  }

  handleHeaderChange(event) {
    this.setState({ headers: JSON.parse(event.target.value) });
    event.preventDefault();
  }

  handleDataChange(event) {
    this.setState({ data: JSON.parse(event.target.value) });
  }

  render() {
    let headers = JSON.stringify(this.state.headers, null, 2);
    let data = JSON.stringify(this.state.data, null, 2);
    return (
      <div className="App">
        <h1>Dynamic Table Component</h1>
        <h4>(This is a work in progress. More features to come.)</h4>
        <div class="component-container">
          <DynamicTable headers={this.state.headers} data={this.state.data} />
        </div>
        <br />
        <div className="test-container">
          <h3>Testing the Component:</h3>
          <p>
            Change the data in the text below. Pay close attention to the data
            attributes.
          </p>
          <div class="grid">
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
