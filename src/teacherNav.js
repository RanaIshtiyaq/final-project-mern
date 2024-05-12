import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { FiHome, FiBook ,Clock, FileText,FiMenu, FiVideo, FiBell, FiSidebar, FiUser, FiClock, FiAlertCircle, FiFileText, FiUserX, FiUsers } from 'react-icons/fi';
import './SidebarMenu.css';
import TeacherDashboard from './component/TeacherDashboard';
import MyBreadcrumb from './component/myBreadCrumb';
import RegisterCourse from './component/registerCourse';
import RegisterTeacher from './component/registerTeacher';
import RegisterStudent from './component/registerStudent';
import EnrolledCourse from './component/enrolledCourse';
import SidebarMenu from './nav';
import App from './component/footer';

const TeacherNav = () => {
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
            case '/teacherDashboard':
                return <TeacherDashboard />;
            case '/register-course':
                return <RegisterCourse />;
            case '/register-teacher':
                return <RegisterTeacher />;
            case '/register-student':
                return <RegisterStudent />;
            case '/enrolled-course':
                return <EnrolledCourse />;
            case '/sidebaar':
                return <SidebarMenu />;
            default:
                return <TeacherDashboard />;
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
                                        <div> <FiUser /><span className='my-4'>Name</span> </div>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item alignRight> Profile</NavDropdown.Item>
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
                            <Nav.Link  onClick={() => handleSidebarButtonClick('/teacherDashboard')}>
                                <FiHome style={iconStyle} className="sidebar-icon" />
                               <p className='myBlue'>Dashboard</p> 
                            </Nav.Link>
                          
                            <Nav.Link  onClick={() => handleSidebarButtonClick('/register-teacher')}>
                                <FiUser  style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Teacher</p> 
                            </Nav.Link>
                            <Nav.Link onClick={() => handleSidebarButtonClick('/register-course')}> 
                                <FiBook style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Course</p> 
                            </Nav.Link>
                            <Nav.Link   onClick={() => handleSidebarButtonClick('/register-student')}>
                                <FiUsers style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Student</p> 
                            </Nav.Link>
                            <Nav.Link   onClick={() => handleSidebarButtonClick('/enrolled-course')}>
                                <FiFileText style={iconStyle} className="sidebar-icon" />
                                <p className='myBlue'>Enroll</p> 
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={11} md={11} sm={12}>
                    <MyBreadcrumb />
                    {renderComponent()}
                    </Col>
                </Row>
                <App />/
            </Container>
        </div>
    );
};

export default TeacherNav;
