import { useState, useEffect } from 'react';
import { Button, Form, Table, Row, Col, Card } from 'react-bootstrap';
import { FiEdit, FiTrash } from 'react-icons/fi';

const RegisterTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    desig: '',
    edu: '',
    salary: '',
    address: '',
  });

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('http://localhost:5000/teachers');
      const data = await response.json();
      console.log(data);
      setTeachers(data);
    } catch (error) {
      console.log('Error fetching teachers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleEdit = (teacher) => {
    setNewTeacher(teacher);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setNewTeacher({
      name: '',
      desig: '',
      edu: '',
      salary: '',
      address: '',
    });
    setShowForm(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newTeacher._id) {
        const response = await fetch(
          `http://localhost:5000/teachers/${newTeacher._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTeacher),
          }
        );

        if (response.ok) {
          setNewTeacher({
            name: '',
            desig: '',
            edu: '',
            salary: '',
            address: '',
          });
          setShowForm(false);
          fetchTeachers();
        } else {
          console.log('Error updating teacher');
        }
      } else {
        const response = await fetch('http://localhost:5000/teachers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTeacher),
        });

        if (response.ok) {
          setNewTeacher({
            name: '',
            desig: '',
            edu: '',
            salary: '',
            address: '',
          });
          setShowForm(false);
          fetchTeachers();
        } else {
          console.log('Error creating teacher');
        }
      }
    } catch (error) {
      console.log('Error submitting teacher:', error);
    }
  };

  const handleDelete = async (teacherId) => {
    try {
      const response = await fetch(`http://localhost:5000/teachers/${teacherId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTeachers();
      } else {
        console.log('Error deleting teacher');
      }
    } catch (error) {
      console.log('Error deleting teacher:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTeacher),
      });

      if (response.ok) {
        setNewTeacher({
          name: '',
          desig: '',
          edu: '',
          salary: '',
          address: '',
        });
        setShowForm(false);
        fetchTeachers();
      } else {
        console.log('Error creating teacher');
      }
    } catch (error) {
      console.log('Error creating teacher:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                <Button variant="primary" className="float-right" onClick={toggleForm}>
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
                      value={newTeacher.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={6}>
                  <Form.Group controlId="desig">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="desig"
                      value={newTeacher.desig}
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
                      value={newTeacher.edu}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group controlId="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                    required="true"
                      type="text"
                      name="salary"
                      value={newTeacher.salary}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="address" className="mt-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                required="true"
                  as="textarea"
                  rows={3}
                  name="address"
                  value={newTeacher.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="my-2 mx-2 myBlueColor">
                {newTeacher._id ? 'Update' : 'Submit'}
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
                <th>Designation</th>
                <th>Education</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.name}</td>
                  <td>{teacher.desig}</td>
                  <td>{teacher.edu}</td>
                  <td>{teacher.salary}</td>
                  <td>{teacher.address}</td>
                  <td>
                    <FiEdit className="edit-icon" onClick={() => handleEdit(teacher)} />
                    <FiTrash className="delete-icon" onClick={() => handleDelete(teacher._id)} />
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

export default RegisterTeacher;
