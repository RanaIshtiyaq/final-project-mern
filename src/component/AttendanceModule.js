import React, { useState } from 'react';
import { Button, Card, Table, Form } from 'react-bootstrap';

const AttendanceModule = () => {
  const [searchDate, setSearchDate] = useState('');
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      name: 'John Doe',
      course: 'Mathematics',
      teacher: 'Prof. Smith',
      totalLectures: 20,
      attendedLectures: 10,
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'Science',
      teacher: 'Prof. Johnson',
      totalLectures: 15,
      attendedLectures: 12,
    },
    // Add more attendees here
  ]);

  // Function to toggle the attendance status
  const toggleAttendance = (id) => {
    setAttendanceData(
      attendanceData.map((attendee) =>
        attendee.id === id ? { ...attendee, attendedLectures: attendee.attendedLectures + 1 } : attendee
      )
    );
  };

  return (
    <div className='mx-3 my-3'>
      <Card>
      <Card.Header>
          <Form.Group controlId="searchDate">
            <Form.Label className='float-right'>Search Date:</Form.Label>
            <h5 className='float-left'>29th May 2023 - 4th Jun 2023</h5>
            <Form.Control
              type="text"
              placeholder="YYYY-MM-DD"
              value={searchDate}
            />
          </Form.Group>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Course</th>
                <th>Teacher</th>
                <th>Total Lectures</th>
                <th>Attended Lectures</th>
                <th>Attendance Percentage</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendee) => (
                <tr key={attendee.id}>
                  <td>{attendee.id}</td>
                  <td>{attendee.name}</td>
                  <td>{attendee.course}</td>
                  <td>{attendee.teacher}</td>
                  <td>{attendee.totalLectures}</td>
                  <td>{attendee.attendedLectures}</td>
                  <td>{((attendee.attendedLectures / attendee.totalLectures) * 100).toFixed(2)}%</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => toggleAttendance(attendee.id)}
                      disabled={attendee.attendedLectures === attendee.totalLectures}
                    >
                      Attend
                    </Button>
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

export default AttendanceModule;
