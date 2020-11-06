import React from 'react'
import axios from 'axios'

function Body() {

  const [info, setInfo] = React.useState(null)

  function testWeb() {    
    axios.get('http://localhost:8000/test-web')
      .then((res) => {
        setInfo(res.data)
      }).catch(err => {
        console.log('Oopps! I vave a error')
        console.error(err)
      })
  }

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1>Welcome</h1>
        <button className="btn btn-primary" onClick={testWeb}>
          Test Web</button>
      </div>
      <div className="container">{info}</div>
    </div>
    
  )
}

export default Body