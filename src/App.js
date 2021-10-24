import './App.css';
import { Component } from 'react';
import StaffList from './components/StaffListComponent';
import { STAFFS, DEPARTMENTS, ROLES } from './shared/staffs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      roles: ROLES
    };
  }

  render() {
    return(
      <div className="App">

        <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Ứng Dụng Quản Lý Nhân Sự v1.0</a>
          </div>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          <StaffList 
            staffs = {this.state.staffs}
            departments = {this.state.departments}
            roles = {this.state.roles}
          />
        </div>

      </div>
    );
  }
}

export default App;