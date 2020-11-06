import React, { useState } from 'react'
import Navigation from './components/Navigation'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function changeData(newName, newEmail) {
    setName(newName)
    setEmail(newEmail)  
  }

  return (
    <div className="container">
      <Navigation onChangeData={changeData} name={name} email={email} />
      
    </div>    
  );
}

export default App;
