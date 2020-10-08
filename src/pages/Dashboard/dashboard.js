import React from 'react'

const Dashboard = props => {
    const {full_name} = props.user
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Status: {props.loggedInStatus}</h1>
            <h3>Welcome {full_name}</h3>
            <pre>{JSON.stringify(props, undefined,2)} </pre>
            <button className="btn btn-success" onClick={props.handleLogout}>Log out</button>
        </div>
    )
}

export default Dashboard
