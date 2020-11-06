import React, { Component } from 'react'
import axios from 'axios'

const API = 'http://localhost:8000/get-users'

class ShowAxios extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false
    }    
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get(API)
      .then(res => {
        this.setState({ users: res.data.users, isLoading: false })      
      })      
  }

  render() {
    const { users, isLoading } = this.state
    if(isLoading) {
      return (
        <div className="container">
          <p className="label">Loading ...</p>
        </div>
      )
    }

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            
            {users.map(user => 
              <tr key={user.objectID}>
                <td>{user.objectID}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            )}           
            
          </tbody>
        </table>
      </div>
    )
  }
  
}

export default ShowAxios