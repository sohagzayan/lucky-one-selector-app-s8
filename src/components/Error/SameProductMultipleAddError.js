import React from 'react';
import { Button, Modal } from 'react-bootstrap';



const SameProductMultipleAddError = ({DublicatAddError ,setDublicatAddError }) => {

    const handleCloseMOdal = ()=>{
        setDublicatAddError(false)
    }

    return (
        <>
        
        <Modal show={DublicatAddError}>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>This Product Already Added , You Can Dont't Same Product Add Multiple Time</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseMOdal} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default SameProductMultipleAddError;