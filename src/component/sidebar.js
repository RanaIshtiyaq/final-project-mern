import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FiMenu, FiHome, FiSettings, FiUser } from 'react-icons/fi';

const Sidebar = () => {
  const [showIcons, setShowIcons] = useState(true);

  const handleToggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <Container fluid className="p-0">
      {/* <Row noGutters> */}
        <Col className={`sidebar ${showIcons ? 'expanded' : ''}`}>
          <Button variant="light" className="toggle-icons" onClick={handleToggleIcons}>
            <FiMenu />
          </Button>
          <div className="icon-container">
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiHome />
            </Button>
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiSettings />
            </Button>
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiUser />
            </Button>
          </div>
        </Col>
      {/* </Row> */}
    </Container>
  );
};

export default Sidebar;
