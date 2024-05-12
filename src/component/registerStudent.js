import { useState, useEffect} from 'react';
import { Button, Form, Table, Row, Col, Card } from 'react-bootstrap';
import { FiEdit, FiTrash } from 'react-icons/fi';

const RegisterStudent = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newStudent, setNewStudent] = useState({
    name: '',
    fname: '',
    edu: '',
    address: '',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      const data = await response.json();
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.log('Error fetching students:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleEdit = (student) => {
    setNewStudent(student);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setNewStudent({
      name: '',
      fname: '',
      edu: '',
      address: '',
    });
    setShowForm(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newStudent._id) {
        const response = await fetch('http://localhost:5000/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStudent),
        });

        if (response.ok) {
          setNewStudent({
            name: '',
            fname: '',
            edu: '',
            address: '',
          });
          setShowForm(false);
          fetchStudents();
        } else {
          console.log('Error creating student');
        }
      } else {
        const response = await fetch(`http://localhost:5000/students/${newStudent._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStudent),
        });

        if (response.ok) {
          setNewStudent({
            name: '',
            fname: '',
            edu: '',
            address: '',
          });
          setShowForm(false);
          fetchStudents();
        } else {
          console.log('Error updating student');
        }
      }
    } catch (error) {
      console.log('Error submitting student:', error);
    }
  };

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:5000/students/${studentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchStudents();
      } else {
        console.log('Error deleting student');
      }
    } catch (error) {
      console.log('Error deleting student:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        setNewStudent({
          name: '',
          fname: '',
          edu: '',
          address: '',
        });
        setShowForm(false);
        fetchStudents();
      } else {
        console.log('Error creating student');
      }
    } catch (error) {
      console.log('Error creating student:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={6}>
              {!showForm && (
                <Button variant="primary" className="float-right mt-2" onClick={toggleForm}>
                  Add New
                </Button>
              )}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          {showForm && (
            <Form onSubmit={handleEditSubmit} className="text-start">
              <Row>
                <Col md={6} sm={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="name"
                      value={newStudent.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={6}>
                  <Form.Group controlId="fname">
                    <Form.Label>Father's Name</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="fname"
                      value={newStudent.fname}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col md={6} sm={12}>
                  <Form.Group controlId="edu">
                    <Form.Label>Education</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="edu"
                      value={newStudent.edu}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="address"
                      value={newStudent.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="primary" type="submit" className="my-2 mx-2 myBlueColor">
                Submit
              </Button>
              <Button variant="secondary" onClick={cancelEdit} className="my-2 mt-2">
                Cancel
              </Button>
            </Form>
          )}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Father's Name</th>
                <th>Education</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.fname}</td>
                  <td>{student.edu}</td>
                  <td>{student.address}</td>
                  <td>
                    <FiEdit
                      className="mx-2"
                      onClick={() => handleEdit(student)}
                      style={{ cursor: 'pointer' }}
                    />
                    <FiTrash
                      onClick={() => handleDelete(student._id)}
                      style={{ cursor: 'pointer' }}
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

export default RegisterStudent;
