import React, {useState} from 'react'
import { Alert, Button } from 'react-bootstrap'

function AlertDismissible() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Hummm...?!</Alert.Heading>
        <p>
          This is my alert message
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible