import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
      <Navbar className='mb-3' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;