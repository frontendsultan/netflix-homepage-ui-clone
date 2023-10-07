import Dropdown from "react-bootstrap/Dropdown"
import '../App.css';

export default function TranslateBtn() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-basic" className='d-flex align-items-center item-transparent'>
          <img src="/translate-icon.svg" alt="" />
          <span className='d-none d-md-inline ms-1'>English</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}