import React, {useState} from 'react'
import SuccessMessage from './SuccessMessage'

function Form(props) {
  
  const [enteredName, setEnteredName] = useState(props.data.name)
  const [enteredEmail, setEnteredEmail] = useState(props.data.email)
  const [ok, setOk] = useState({state: false, msg: null})
  
  function changeDataHandler(event) {
    event.preventDefault()
    let newName = document.getElementById('name').value
    let newEmail = document.getElementById('email').value
    props.data.onChangeData(newName, newEmail)
    setOk({ state: true, msg: 'Ok, it works' })

    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    }

    console.log(data)
  }

  function changeName(event) {
    setEnteredName(event.target.value)
  }

  function changeEmail(event) {
    setEnteredEmail(event.target.value)
  }

  return (
    <div className="container">
      <hr />
      <h2>Enter Data</h2>
      <form className="form-row" onSubmit={changeDataHandler}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" 
              id="name" placeholder="Enter Name" 
              value={enteredName} 
              onChange={changeName}>
            </input>
          </div>
          <div className="col">
            <input type="email" className="form-control" 
              id="email" placeholder="Enter E-Mail"
              value={enteredEmail} onChange={changeEmail}>
            </input>
          </div>  
          <div className="col">
            <button  type="submit" className="form-control btn-info">
              Send
            </button>                
          </div>      
        </div>  
        
        <div className="row">
          <div className="col">          
            {ok.state ? <SuccessMessage msg={ok.msg}/> : null}
          </div>  
        </div>    
      </form>
    </div>
  )
}

export default Form