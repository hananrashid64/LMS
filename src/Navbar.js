import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ marginLeft: '85px', color:"#194D37" }}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-5 my-2 my-lg-10"
            style={{ maxHeight: '100px', marginLeft: '60px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{ maxHeight: '100px', width: '500px', borderColor:"#194D37" }}

              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
              <Nav.Link href="#action1" style={{ maxHeight: '100px', marginLeft: '60px', color:"#194D37" }}>Contact Us</Nav.Link>
              <Nav.Link href="#action1" style={{ maxHeight: '100px', marginLeft: '60px', color:"#194D37" }}>Event</Nav.Link>
              <Nav.Link href="#action1" style={{ maxHeight: '100px', marginLeft: '60px', color:"#194D37" }}>Log In</Nav.Link>

              <Button variant="outline-success" style={{ maxHeight: '100px', marginLeft: '60px' }}>Sign Up</Button>


        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    </>

    
   
    
  );
  
}

export default NavScrollExample;