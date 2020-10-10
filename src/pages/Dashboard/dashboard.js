import React, { Component } from 'react';
import { render } from "react-dom";
import { CustomAlert } from '../../components/alerts/alerts';

// const Dashboard = props => {
//     // const {full_name, message} = props.user
//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <h1>{}</h1>
//             <h1>Status: {props.loggedInStatus}</h1>
//             <h3>Welcome {props.user.full_name}</h3>
//             {/* <pre>{JSON.stringify(props, undefined,2)} </pre> */}
//             <button className="btn btn-success" onClick={props.handleLogout}>Log out</button>
//         </div>
//     )
// }

// export default Dashboard;

export default class Dashboard extends Component {
    
    checkLogin() {
        if(this.props.loggedInStatus === "You are not logged in") {
            this.props.history.push("/sign_in");
            render(<CustomAlert type="warning" message="Please sign in to continue." />, document.getElementById('info'));
        }
    }

    componentDidUpdate() {
        this.checkLogin();;
    }

    componentDidMount() {
        this.checkLogin();
    }
  
    render() {
      return (
        <div>
            <h1>Dashboard</h1>
            <h1>{}</h1>
            <h1>Status: {this.props.loggedInStatus}</h1>
            <h3>Welcome {this.props.user.full_name}</h3>
            {/* <pre>{JSON.stringify(props, undefined,2)} </pre> */}
            <button className="btn btn-success" onClick={this.props.handleLogout}>Log out</button>
        </div>
      );
    }
  }
