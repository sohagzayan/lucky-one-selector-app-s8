import React from "react";
import { Button, Modal } from "react-bootstrap";

const ErrorMaximumAdding = ({ maximumAddingError, setMaximumAddingError }) => {
  const handleCloseMOdal = () => {
    setMaximumAddingError(false);
  };

  return (
    <>
      <Modal show={maximumAddingError}>
        <Modal.Header>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You Can Adding <string>Maximum 4 item</string> . please you can go
          next steps
        </Modal.Body>
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
