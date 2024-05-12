import { useState, useEffect } from 'react';
import { Button, Form, Table, Row, Col, Card } from 'react-bootstrap';
import { FiEdit, FiTrash } from 'react-icons/fi';

const EnrolledCourse = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newEnrollment, setNewEnrollment] = useState({
    studentId: '',
    courseId: '',
    fee: '',
    submitted: '',
    remaining: '',
  });

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchEnrolledCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      const data = await response.json();
      console.log(data)
      setStudents(data);
    } catch (error) {
      console.log('Error fetching students:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.log('Error fetching courses:', error);
    }
  };

  const fetchEnrolledCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/enrolles');
      const data = await response.json();
      setEnrolledCourses(data);
    } catch (error) {
      console.log('Error fetching enrolled courses:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEnrollment((prevEnrollment) => ({
      ...prevEnrollment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/enrolledCourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEnrollment),
      });

      if (response.ok) {
        setNewEnrollment({
          studentId: '',
          courseId: '',
          fee: '',
          submitted: '',
          remaining: '',
        });
        setShowForm(false);
        fetchEnrolledCourses();
      } else {
        console.log('Error creating enrolled course');
      }
    } catch (error) {
      console.log('Error creating enrolled course:', error);
    }
  };

  const handleDelete = async (enrollmentId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/enrolledCourses/${enrollmentId}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        fetchEnrolledCourses();
      } else {
        console.log('Error deleting enrolled course');
      }
    } catch (error) {
      console.log('Error deleting enrolled course:', error);
    }
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEnrollments = enrolledCourses.filter((enrollment) => {
    const student = students.find((s) => s._id === enrollment.studentId);
    const course = courses.find((c) => c._id === enrollment.courseId);
    const studentName = student ? `${student.firstName} ${student.lastName}` : '';
    const courseName = course ? course.courseName : '';

    return (
      studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="mx-3 my-3">
      <Card>
        <Card.Header>
          <Row>
            <Col md={6} sm={6}>
              <Form.Group controlId="formTitle">
                <Form.Control
                  type="text"
                  placeholder="Search by student or course name"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={6}>
              {!showForm && (
                <Button variant="primary" className="float-right" onClick={toggleForm}>
                  Add New
                </Button>
              )}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {showForm && (
            <Form onSubmit={handleSubmit} className="text-start">
              <Row>
                <Col md={6} sm={6}>
                  <Form.Group controlId="studentId">
                    <Form.Label>Student</Form.Label>
                    <Form.Control
                    required="true"
                      as="select"
                      name="studentId"
                      value={newEnrollment.studentId}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a student</option>
                      {students.map((student) => (
                        <option key={student._id} value={student._id}>
                          {`${student.name}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6} sm={6}>
                  <Form.Group controlId="courseId">
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                    required="true"
                      as="select"
                      name="courseId"
                      value={newEnrollment.courseId}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course._id} value={course._id}>
                          {course.courseName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={6} sm={6}>
                  <Form.Group controlId="fee">
                    <Form.Label>Fee</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="fee"
                      value={newEnrollment.fee}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={6}>
                  <Form.Group controlId="submitted">
                    <Form.Label>Submitted</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="submitted"
                      value={newEnrollment.submitted}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={6} sm={6}>
                  <Form.Group controlId="remaining">
                    <Form.Label>Remaining</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="remaining"
                      value={newEnrollment.remaining}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit" className="my-2 mx-2 myBlueColor">
                Submit
              </Button>
              <Button variant="secondary" className="my-2 mt-2">
                Cancel
              </Button>
            </Form>
          )}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course Name</th>
                <th>Fee</th>
                <th>Submitted</th>
                <th>Remaining</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnrollments.map((enrollment, index) => (
                <tr key={index}>
                  <td>{enrollment.studentId}</td>
                  <td>{enrollment.courseId}</td>
                  <td>{enrollment.fee}</td>
                  <td>{enrollment.submitted}</td>
                  <td>{enrollment.remaining}</td>
                  <td>
                    {/* <FiEdit className="edit-icon" onClick={() => handleEdit(enrollment)} /> */}
                    <FiTrash className="delete-icon" onClick={() => handleDelete(enrollment._id)} />
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

export default EnrolledCourse;
