import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Section from './components/Section';
import FaqItem from './components/FaqItem';
import GetEmail from './components/GetEmail';
// import Offer from './components/Offer';
import TranslateBtn from './components/TranslateBtn';

function App() {

  return (
    <>

      <Navbar className="w-100 bg-transparent position-absolute mt-2">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="w-100"
              alt="Netflix logo"
            />
          </Navbar.Brand>
          <Form className='d-flex'>
            <TranslateBtn />
            <Button className='btn-sm ms-2 btn-red'>Sign in</Button>
          </Form>
        </Container>
      </Navbar>

      <main>
        <section id='home' className='main__home d-flex justify-content-center align-items-center'>
          <div className='text-center'>
            <div className='d-flex justify-content-center align-items-center'>
              <h1 className=''>Unlimited movies, TV shows, and more</h1>
            </div>
            <p>Watch anywhere. Cancel anytime.</p>
            <GetEmail />
          </div>
        </section>


        <Section
          heading='Enjoy on your TV'
          para='Watch on Smart TVs, Playstation, Xbox,
        Chromecast, Apple TV, Blu-ray players, and more.'
          image='./tv.png'
          reverseOrder={false}
        />
        <hr />
        <Section
          heading='Watch everywhere'
          para='Stream unlimited movies and TV shows on your
          phone, tablet, laptop, and TV.'
          image='./device-pile.png'
          reverseOrder={true}
        />
        <hr />
        <Section
          heading='Create profiles for kids'
          para='Send kids on adventures with their favorite
          characters in a space made just for them—free
          with your membership.'
          image='./kids.png'
          reverseOrder={false}
        />
        <hr />
        <Section
          heading='Download your shows to watch offline'
          para='Only available on ad-free plans.'
          image='./mobile.png'
          reverseOrder={true}
        />
        <hr />

        <section id='faqs' className='main__faqs d-flex justify-content-center'>
          <div className="wrapper__child">
              <h1>Frequently Asked Questions</h1>
              <Accordion>
                <FaqItem />
              </Accordion>
              <GetEmail />
          </div>
        </section>

        <hr />
      </main>
      <footer>
        
        <Container className='wrapper__child'>
        Questions? Call:<a href='tel:+1-844-505-2993'>1-844-505-2993</a>
            <Row className='footer__grid'>
              <a href="">FAQ</a>
              <a href="">Help Center</a>
              <a href="">Account</a>
              <a href="">Media Center</a>
              <a href="">Investor Relations</a>
              <a href="">Jobs</a>
              <a href="">Netflix Shop</a>
              <a href="">Redeem Gift Cards</a>
              <a href="">Buy Gift Cards</a>
              <a href="">Ways to Watch</a>
              <a href="">Terms of Use</a>
              <a href="">Privacy</a>
              <a href="">Cookie Preferences</a>
              <a href="">Corporate Information</a>
              <a href="">Contact Us</a>
              <a href="">Speed Test</a>
              <a href="">Legal Notices</a>
              <a href="">Only on Netflix</a>
              <a href="">Do Not Sell or Share My Personal Information</a>
              <a href="">Ad Choices</a>
            </Row>
            <TranslateBtn />
          </Container>

      </footer>
    </>
  )
}

export default App
