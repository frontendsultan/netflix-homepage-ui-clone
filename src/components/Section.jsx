import { Container, Row, Col } from 'react-bootstrap';
// import Offer from './Offer';
export default function Section(props) {
  return (
    <>
      
        {/* <Offer/> */}
      <Container className='section mt-5'>
        <Row className='border-warning d-block d-md-flex'>
          <Col className='d-flex align-items-center' lg={{order:props.reverseOrder?'last':'first'}}>
            <Col className='text-center text-lg-start'>
                <h2 className=''>{props.heading}</h2>
                <p>{props.para}</p>
            </Col>
          </Col>
          <Col className='d-flex align-items-center'>
            <img src={props.image} alt=""/>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}