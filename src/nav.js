import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { FiHome, FiBook, FiCalendar,Clock, FileText,FiMenu, FiVideo, FiBell, FiSidebar, FiUser, FiClock, FiAlertCircle, FiFileText } from 'react-icons/fi';
import './SidebarMenu.css';
import Home from './component/home';
import Course from './component/course';
import MyBreadcrumb from './component/myBreadCrumb';
import Timetable from './component/timeTable';
import AttendanceModule from './component/AttendanceModule';
import App from './component/footer';
const SidebarMenu = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeComponent, setActiveComponent] = useState('home');

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const iconStyle = {
        height: '30px',
        width: '30px',
        color: '#004aad',
    }
    const iconStyle1 = {
        height: '30px',
        width: '30px',
        color: '#004aad',
    }
    const iconStyle2 = {
        height: '20px',
        width: '20px',
        color: '#004aad',
    }
    const h4Style = {
        color: '#004aad',
    }
    const handleSidebarButtonClick = (component) => {
        setActiveComponent(component);
    };
    const renderComponent = () => {
        switch (activeComponent) {
            case '/home':
                return <Home />;
            case '/course':
                return <Course />;
            case '/timetable':
                return <Timetable />;
            case '/AttendanceModule':
                return <AttendanceModule />;
            default:
                return <Home />;
        }
    };
    
    return (
        <div>

            <Navbar bg="white" expand="md">
                <Container >
                    {/* <Navbar.Brand><img src="images/skillup.png" className='d-none' height={60} alt="" /></Navbar.Brand> */}
                    <Nav.Link onClick={toggleSidebar}  >
                    <Navbar.Brand><img src="images/skillup.png"  height={55} alt="" /></Navbar.Brand>
                        <FiMenu className='btn-primary' style={iconStyle1} />
                    </Nav.Link>
                    <h4 className='mx-4' style={h4Style} >LMS</h4>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#video" className='mx-2'>
                            <FiVideo style={iconStyle2} />
                        </Nav.Link>
                        <Nav.Link href="#video" className='mx-2'>
                            <FiSidebar style={iconStyle2} />
                        </Nav.Link>
                        <Nav.Link href="#video" className='mx-2'>
                            <FiBell style={iconStyle2} />
                        </Nav.Link>
                        <Nav.Link href="#video" className='mx-2' >
                                <NavDropdown style={iconStyle2} title={<FiUser className="circular-dropdown-icon " />}  id="basic-nav-dropdown" >
                                    <div className="circular-dropdown-menu " >
                                        <div> <FiUser /><span className='my-4'>Student Name</span> </div>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#profile" alignRight> Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                                    </div>
                                </NavDropdown>  
                                </Nav.Link>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Row>
                    <Col lg={1}  md={1} className={`sidebar ${showSidebar ? 'show' : ''}`}>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link  onClick={() => handleSidebarButtonClick('/home')}>
                                <FiHome style={iconStyle} className="sidebar-icon" />
                               <p className='myBlue'>Home</p> 
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSidebarButtonClick('/course')}> 
                                <FiBook style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Course</p> 
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSidebarButtonClick('/timetable')}>
                                <FiCalendar style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>TimeTable</p> 
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSidebarButtonClick('/AttendanceModule')}>
                                <FiFileText style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Attenndance</p> 
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={11} md={11} sm={12}>
                    <MyBreadcrumb />
                    {renderComponent()}
                    </Col>
                    <App />
                </Row>
                
            </Container>
        </div>
    );
};

export default SidebarMenu;
