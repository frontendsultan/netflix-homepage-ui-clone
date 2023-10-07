import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


export default function GetEmail() {

  return (
    <div className='mt-4'>
      <h3 className='fw-normal text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className='d-md-flex justify-content-center'>

        <Form className='d-md-flex'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" className='item-transparent'/>
          </Form.Group>
          <div className='ps-md-2'>
            <Button className='btn-red'>
              <div className="d-flex">
                <div>Get Started</div>
                <div><img src="./right-arrow.svg" alt="" className='ms-1' /></div>
              </div>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}