import React,{useState, useEffect} from 'react';
import { Card,Button, Container, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import MyAccordion from './accordion';
const Home = () => {
  
  const[Course, setCourse]=useState([]);
useEffect(()=>{
    const FetchCourse=async()=>{
        try{
            const response=await axios.get('http://localhost:4000/enrolledCourses');
            setCourse(response.data);
       
        }
        catch(error){
            console.error("Error in post", error)
        }
    };
    FetchCourse();
},[]);
  return (
    <>
    <div className="mx-3">
        <MyAccordion className="mx-3" />
    </div>
  
    <div className='row'>
      
         {Course.map(course=>(
          <div className='col-md-4 col-sm-12'>
      <Card className='my-4 mx-3'>
        <Container>
           <Card.Img variant="top" className='cardImgMargin' src={course.courseImage}  />
      <Card.Body>
        <Card.Title><h2>{course.courseName}</h2><h4>{course.courseCode}</h4></Card.Title>
        <Card.Text>
          {course.teacher}
        </Card.Text>
        <Button variant="primary" className='mx-4'>CLO Attain</Button>
        <Button variant="warning">PLO Atain </Button>
      </Card.Body>
        </Container>
     
    </Card>
    </div>
    ))}
      
    </div>
   
    
    </>
  )
};

export default Home;
