import React from 'react'
import { Button } from 'react-bootstrap'

function FlatButton() {
  
  function clicked() {
    alert('OOPS!');
  }

  return (
    <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: #89f;
          color: #222;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }

        `}  
      </style>     

      <Button variant="flat" size="xxl" onClick={clicked}>
        Flat Button
      </Button>

    </>
  )
}

export default FlatButton