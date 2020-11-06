import React from 'react'

function Message(props) {
  
  return (
    <div className="alert alert-success alert-dismissible">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <strong>Success!</strong> {props.msg}.
    </div>
  )
}

export default Message
