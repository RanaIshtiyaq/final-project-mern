import { useState, useEffect } from 'react';
import { Button, Form, Table, Row, Col, Card } from 'react-bootstrap';
import { FiEdit, FiTrash } from 'react-icons/fi';

const RegisterCourse = () => {
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newCourse, setNewCourse] = useState({
        courseName: '',
        courseCode: '',
        courseDesc: '',
        duration: '',
        courseImg: '',
        teacherId: '',
        fee: '',
    });

    useEffect(() => {
        fetchCourses();
    }, []);
    const [editCourseId, setEditCourseId] = useState(null);
    const [editCourse, setEditCourse] = useState({});

    const fetchCourses = async () => {
        try {
            const response = await fetch('http://localhost:5000/courses');
            const data = await response.json();
            console.log(data)
            setCourses(data);
        } catch (error) {
            console.log('Error fetching courses:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (editCourse) {
            setEditCourse((prevCourse) => ({
                ...prevCourse,
                [name]: value,
            }));
        } else {
            setNewCourse((prevCourse) => ({
                ...prevCourse,
                [name]: value,
            }));
        }
    };

    // Function to handle edit button click
    const handleEdit = (course) => {
        setEditCourseId(course._id);
        setEditCourse(course);
        setShowForm(true);
    };

    // Function to handle cancel edit
    const cancelEdit = () => {
        setEditCourseId('');
        setEditCourse({
            courseName: '',
            courseCode: '',
            courseDesc: '',
            duration: '',
            courseImg: '',
            teacherId: '',
            fee: ''
        });
        setShowForm(false);
    };

    // Function to handle form submit for edit
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!editCourseId) {
                // Insert operation
                const response = await fetch('http://localhost:5000/courses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCourse),
                });

                if (response.ok) {
                    // Clear the form and fetch the updated list of courses
                    setNewCourse({ ...newCourse, courseCode: '', courseName: '', courseDesc: '', duration: '', courseImg: '', teacherId: '', fee: '' });
                    setShowForm(false);
                    fetchCourses();
                } else {
                    console.log('Error creating course');
                }
            } else {
                // Update operation
                const response = await fetch(`http://localhost:5000/courses/${editCourseId}`, {

                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(editCourse),
                });
                // {console.log(editCourse);} 
                if (response.ok) {
                    // Clear the form and fetch the updated list of courses
                    setEditCourseId(null);
                    setEditCourse(null);
                    setShowForm(false);
                    fetchCourses();
                } else {
                    console.log('Error updating course');
                }
            }
        } catch (error) {
            console.log('Error submitting course:', error);
        }
    };


    const handleDelete = async (courseId) => {
        try {
            const response = await fetch(`http://localhost:5000/courses/${courseId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchCourses(); // Fetch updated course list after deletion
            } else {
                console.log('Error deleting course');
            }
        } catch (error) {
            console.log('Error deleting course:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCourse),
            });
            console.log(newCourse)

            if (response.ok) {
                // Clear the form and fetch the updated list of courses
                setNewCourse({
                    courseName: '',
                    courseCode: '',
                    courseDesc: '',
                    courseImg: '',
                    teacherId: '',
                    fee: '',
                    duration: '',
                });
                setShowForm(false);
                fetchCourses();
            } else {
                console.log('Error creating course');
            }
        } catch (error) {
            console.log('Error creating course:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className='mx-3 my-3'>
            <Card>
                <Card.Header>
                    <Row>
                        <Col md={6} sm={6} >
                            <Form.Group controlId="formTitle">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={6} >
                            {!showForm && (
                                <Button variant="primary" className='float-right' onClick={toggleForm}>
                                    Add New
                                </Button>
                            )}
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    {showForm && (
                        <Form onSubmit={editCourseId ? handleEditSubmit : handleSubmit} className='text-start'>

                            <Row>
                                <Col md={6} sm={6}>
                                    <Form.Group controlId="courseCode">
                                        <Form.Label>Course Code</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="courseCode"
                                            value={editCourse ? editCourse.courseCode : newCourse.courseCode}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} sm={6}>
                                    <Form.Group controlId="courseName">
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="courseName"
                                            value={editCourse ? editCourse.courseName : newCourse.courseName}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col md={6} sm={12}>
                                    <Form.Group controlId="duration">
                                        <Form.Label>Duration</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="duration"
                                            value={editCourse ? editCourse.duration : newCourse.duration}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Form.Group controlId="fee">
                                        <Form.Label>Fee</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="fee"
                                            value={editCourse ? editCourse.fee : newCourse.fee}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col md={6} sm={12}>
                                    <Form.Group controlId="courseImg">
                                        <Form.Label>Course Img</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="courseImg"
                                            value={editCourse ? editCourse.courseImg : newCourse.courseImg}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} sm={12}>
                                    <Form.Group controlId="teacherId">
                                        <Form.Label>Teacher</Form.Label>
                                        <Form.Control
                                            required="true"
                                            type="text"
                                            name="teacherId"
                                            value={editCourse ? editCourse.teacherId : newCourse.teacherId}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="courseDesc" className='mt-2'>
                                <Form.Label>Course Description</Form.Label>
                                <Form.Control
                                    required="true"
                                    as="textarea"
                                    rows={3}
                                    name='courseDesc'
                                    value={editCourse ? editCourse.courseDesc : newCourse.courseDesc}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className='my-2 mx-2 myBlueColor'
                            >
                                {editCourseId ? 'Update' : 'Submit'}
                            </Button>
                            <Button variant="secondary" onClick={cancelEdit} className='my-2 mt-2'>
                                Cancel</Button>
                        </Form>
                    )}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Duration</th>
                                <th>Fee</th>
                                <th>Image</th>
                                <th>Teacher</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.courseCode}</td>
                                    <td>{course.courseName}</td>
                                    <td>{course.duration}</td>
                                    <td>{course.fee}</td>
                                    <td>{course.courseImg}</td>
                                    <td>{course.teacherId}</td>
                                    <td>{course.courseDesc}</td>
                                    <td>
                                        <FiEdit
                                            className="edit-icon "
                                            onClick={() => handleEdit(course)}
                                        />
                                        <FiTrash
                                            className="delete-icon"
                                            onClick={() => handleDelete(course._id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RegisterCourse;