import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Freddy() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='m-1' variant="outline-light" onClick={handleShow}>
        Freddy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Freddy;