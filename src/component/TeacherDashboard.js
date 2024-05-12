import { red } from '@mui/material/colors';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiHome, FiBook ,Clock, FileText,FiMenu, FiVideo, FiBell, FiSidebar, FiUser, FiClock, FiAlertCircle, FiFileText, FiUserX, FiUsers } from 'react-icons/fi';


const TeacherDashboard = () => {
  const iconStyle = {
    height: '80px',
    width: '80px',
}
  return (
    <Container>
      <h2 className='btn-danger my-3'>Admin Dashboard</h2>

      <Row>
        <Col sm={6}>
          <Card className='bg-primary text-white'>
            <Card.Body>
            <FiUser  style={iconStyle} className="sidebar-icon" />
            {/* <Card.Header></Card.Header> */}
              <Card.Title>Active Students 20</Card.Title>
              {/* Add your graph component here */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='bg-warning'>
            <Card.Body>
            <FiUsers  style={iconStyle} className="sidebar-icon" />
              <Card.Title>Teacher 10</Card.Title>
              {/* Add your graph component here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col sm={6}>
          <Card className='bg-danger text-white'>
            <Card.Body>
            <FiBook  style={iconStyle} className="sidebar-icon" />
              <Card.Title>Courses 6</Card.Title>
              {/* Add your stat component here */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className='bg-success text-white '>
            <Card.Body>
            <FiFileText  style={iconStyle} className="sidebar-icon" />
              <Card.Title>Enrolled Students 500</Card.Title>
              {/* Add your stat component here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherDashboard;
