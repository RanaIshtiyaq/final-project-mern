// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FiMenu, FiHome, FiSettings, FiUser, FiBook, FiCalendar, FiList, FiClock } from 'react-icons/fi';

function MyNavbar() {

  const [showIcons, setShowIcons] = useState(true);

  const handleToggleIcons = () => {
    setShowIcons(!showIcons);
  };
  const iconStyle={
    height:'40px',
    width:'40px',
    color:'#004aad'
  }
  return (
    <div>
       <Navbar bg="light" expand="lg">
      {/* <Container> */}
        <Navbar.Brand href="#home"><img src="images/skillup.png" height={60} alt=""/>LMS
        
        </Navbar.Brand>
        <Button variant="light" className="toggle-icons text-start" onClick={handleToggleIcons}>
            <FiMenu style={iconStyle}/>
          </Button>
        
    </Navbar>
      <Container fluid className="p-0">
      {/* <Row noGutters> */}
        <Col className={`sidebar ${showIcons ? 'expanded' : ''}`}>
          
          <div className="icon-container">
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiHome style={iconStyle} />
            </Button>
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
            <FiBook style={iconStyle} />
            </Button>
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiCalendar style={iconStyle} />
            </Button>
            <Button variant="light" className={`icon-button ${showIcons ? 'visible' : ''}`}>
              <FiClock style={iconStyle} />
            </Button>
          </div>
        </Col>
      {/* </Row> */}
    </Container>
    </div>
   
    
  );
}

export default MyNavbar;