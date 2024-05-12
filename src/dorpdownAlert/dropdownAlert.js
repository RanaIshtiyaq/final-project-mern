import React, { useState } from 'react';
import { Dropdown, Button, Alert, Row, Col } from 'react-bootstrap';
import { FiActivity } from 'react-icons/fi';

const DropdownAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertToggle = () => {
    setShowAlert(!showAlert);
  };

  return (
    <Row className='my-3 mx-3'>
        <Col className='form-control '>
        <Dropdown >
      <Dropdown.Toggle className='form-control text-end' variant="secoundry" id="dropdown-basic">
        Important Alert
      </Dropdown.Toggle>

      <Dropdown.Menu className='form-control'>
        <Dropdown.Item onClick={handleAlertToggle}>Toggle Alert</Dropdown.Item>
      </Dropdown.Menu>

      {showAlert && (
        <Alert variant="success" onClose={handleAlertToggle} dismissible>
          This is an alert message!
        </Alert>
      )}
    </Dropdown>
        </Col>
    
    </Row>
    
  );
};

export default DropdownAlert;
