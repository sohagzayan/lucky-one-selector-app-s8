import React from 'react';
import { Button, Modal } from 'react-bootstrap';



const ErrorMaximumAdding = ({maximumAddingError ,setMaximumAddingError ,textBox}) => {

    const handleCloseMOdal = ()=>{
        setMaximumAddingError(false)
    }

    const {title , errorSMS}  = textBox

   






    return (
        <>
        
        <Modal show={maximumAddingError}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {errorSMS}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseMOdal} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default ErrorMaximumAdding;