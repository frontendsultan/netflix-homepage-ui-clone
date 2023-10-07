import Accordion from 'react-bootstrap/Accordion';
import faqData from './faq.json';
export default function FaqItem(){
  const faq = faqData.map((faq,index) => {
    return(
      <Accordion.Item eventKey={index} className='faqs__item' key={index}>
      <Accordion.Header className='faqs__header'>{faq.header}</Accordion.Header>
      <Accordion.Body className='faqs__body'>
        {faq.body}
      </Accordion.Body>
    </Accordion.Item>

    )
  })
    return(
        <>
        {faqData.length > 0?faq:''}
        {/* <Accordion.Item eventKey='0' className='faqs__item'>
              <Accordion.Header className='faqs__header'>What is Netflix?</Accordion.Header>
              <Accordion.Body className='faqs__body'>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                movies, anime, documentaries, and more on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want without a single commercial –
                all for one low monthly price.
                There's always something new to discover and new TV shows and movies are added every week!
              </Accordion.Body>
            </Accordion.Item> */}
        </>
    )
}