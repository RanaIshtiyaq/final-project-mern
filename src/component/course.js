import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Table, FormControl, InputGroup, Card, Form } from 'react-bootstrap';

const TableComponent = () => {
    const[Courselist, setCourselist]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        const FetchCourse=async()=>{
            try{
                const response=await axios.get('http://localhost:5000/courses');
                setCourselist(response.data);
           
            }
            catch(error){
                console.error("Error in post", error)
            }
        };
        FetchCourse();
    },[]);
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
  };

  const filteredCourses = Courselist.filter((course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <div className='my-3 mx-3'>
        <Card>
      <Card.Header>
          <Form.Group controlId="handleSearch">
            <h5 className='float-left'>29th May 2023 - 4th Jun 2023</h5>
            <Form.Control
              type="text"
              placeholder="Search Course Name "
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </Card.Header>
        <Card.Body>
        <Table striped bordered hover className=''>
      <thead>
        <tr>
          <th>#</th>
          <th>Course Name</th>
          <th>Code</th>
          <th>Desc</th>
          <th>Duration</th>
          <th>Image</th>
          <th>Teacher</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
      {filteredCourses.map(courseList=>(
        <tr>
          <td>1</td>
          <td>{courseList.courseName}</td>
          <td>{courseList.courseCode}</td>
          <td>{courseList.courseDesc}</td>
          <td>{courseList.duration}</td>
          <td>{courseList.courseImg}</td>
          <td>{courseList.teacherId}</td>
          <td>{courseList.fee}</td>
        </tr>
    ))}
      </tbody>
    </Table>
        </Card.Body>
      </Card>
    
    </div>
  );
};

export default TableComponent;
