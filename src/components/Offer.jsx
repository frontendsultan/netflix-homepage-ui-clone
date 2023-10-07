import Container from "react-bootstrap/Container"
import './components.css';

export default function Offer() {
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <div className='offer__dialog'>
                    <img src="./popcorn.png" alt="" />
                    <div>
                        <h3>The Netflix you love for just $6.99.</h3>
                        <h4>Get the Standard with ads plan.</h4>
                        <a href="">Learn More <img src="./right-arrow.svg" alt="" /></a>
                    </div>
                </div>
            </Container>
        </>
    )
}