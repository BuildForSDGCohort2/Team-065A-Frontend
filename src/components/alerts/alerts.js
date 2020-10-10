import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export function CustomAlert(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className="alert" variant={props.type} onClose={() => setShow(false)} dismissible>
        {props.message}
      </Alert>
    );
  }
  return <Button className="no-show" onClick={() => setShow(true)}>Show Alert</Button>;
}