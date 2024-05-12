import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function App() {

    const iconStyle = {
        fontSize: '24px',
        marginRight: '0.75rem',
        color: '#000', // Customize the color if needed
      };

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted" style={{marginTop:"200px"}}>
      

      <section className="pt-3">
        <MDBContainer className="text-center text-md-start mt-5">
                  <MDBRow className="mt-3" style={{marginLeft:"50px"}}>

                      
            <MDBCol md="4" lg="4" xl="3" className="mx-auto mb-4 ms-0" >
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3 text-align-left" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Courses Offered</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  MEAN/MERN Stack
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Mobile App Development
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  SQA
                </a>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">
                  Web Engineering
                </a>
                          </p>
                          <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Cloud Solutions
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Digital Library
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  FAQ's
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Lahore, Punjab, Pakistan
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@skillybrains.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 031 234 56 78 8
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 92 031 234 56 78 9
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className="d-flex justify-content-center justify-content-center p-4 border-top">
        <div>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaFacebookF />
          </a>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaTwitter />
          </a>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaGoogle />
          </a>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaInstagram />
          </a>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaLinkedin />
          </a>
          <a href="" className="me-4 text-reset" style={iconStyle}>
          <FaGithub />
          </a>
        </div>
      </section>
    </MDBFooter>
  );
}
