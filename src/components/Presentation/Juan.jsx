import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./presentation.css"

function Juan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='m-1' variant="outline-light" onClick={handleShow}>
        Juan
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="d-flex" closeButton>
      <Modal.Title id="p-title"><b>Datos Desarrollador:</b></Modal.Title>
      </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Juan;