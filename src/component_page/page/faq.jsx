import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../style/faq.css';
import faq_img from '../../assets/image/faq.jpg';

function FAQ_Page() {
    const [accordionItems, setAccordionItems] = useState([
        {
            question: 'Where can I watch?',
            answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.'
        },
        {
            question: 'Mauris id nibh eu fermentum mattis purus?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]);
    console.log('Check state: ', accordionItems)

    return (
        <>
            <img className='img_faq' src={faq_img} alt="" />
            <h1 className='title-text'>FAQ</h1>
            <span className='text-faq'>Frequently Asked Questions</span>
            <div className="faq-container">
                <Accordion>
                    {accordionItems.map((item, index) => (
                        <Accordion.Item key={index} eventKey={`${index}`}>
                            <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }} />{item.question}</Accordion.Header>
                            <Accordion.Body style={{ textAlign: 'justify' }}>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </>
    );
}
export default FAQ_Page;