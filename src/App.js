import React, { Component } from 'react';
import EmployeeDataUpload from './containers/employee-data-upload'

class App extends Component {
  render() {
    return (
      <div>
        <h2 class="App"> Employee Data Upload</h2>
        <EmployeeDataUpload />
      </div>
    );
  }
}

export default App;