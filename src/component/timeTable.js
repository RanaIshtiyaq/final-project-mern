import React, { useState } from 'react';
import { Container, Card, Table, Form } from 'react-bootstrap';

const Timetable = () => {
  const [searchDate, setSearchDate] = useState('');

  // Sample timetable data
  const timetableData = [
    { date: '2023-05-30', time: '9:00 AM', monday: 'Math', tuesday: 'Science', wednesday: 'English' },
    { date: '2023-05-31', time: '10:00 AM', monday: 'Science', tuesday: 'Math', wednesday: 'History' },
    { date: '2023-06-01', time: '11:00 AM', monday: 'English', tuesday: 'History', wednesday: 'Science' },
    { date: '2023-06-01', time: '11:00 AM', monday: 'English', tuesday: 'History', wednesday: 'Science' },
    { date: '2023-06-01', time: '11:00 AM', monday: 'English', tuesday: 'History', wednesday: 'Science' },
    // Add more rows as needed
  ];

  const handleSearchChange = (e) => {
    setSearchDate(e.target.value);
  };

  const filteredTimetable = timetableData.filter(
    (row) => row.date.includes(searchDate)
  );

  return (
    <div className='mx-3 my-3'>
      <Card>
        <Card.Header>
          <Form.Group controlId="searchDate">
            <Form.Label className='float-right'>Search Date:</Form.Label>
            <h5 className='float-left'>29th May 2023 - 4th Jun 2023</h5>
            <Form.Control
              type="date"
              placeholder="YYYY-MM-DD"
              value={searchDate}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Card.Header>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
              </tr>
            </thead>
            <tbody>
              {filteredTimetable.map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td>{row.monday}</td>
                  <td>{row.tuesday}</td>
                  <td>{row.wednesday}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Timetable;
