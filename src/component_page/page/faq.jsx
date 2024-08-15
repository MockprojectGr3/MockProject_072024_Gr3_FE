import Accordion from 'react-bootstrap/Accordion';
import '../../style/faq.css';
import Header from '../layout/header';
import Footer from '../layout/Footer';
import faq_img from '../../assets/image/faq.jpg';

function FAQ_Page() {
    return (
        <>
            <Header />
            <img className='img_faq' src={faq_img} alt="" />
            <h1 className='title-text'>FAQ</h1>
            <span className='text'>Frequently Asked Questions</span>
            <div className="faq-container">

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header

                        ><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Where can I watch?</Accordion.Header>
                        <Accordion.Body
                            style={{ textAlign: 'justify' }}
                        >
                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Mauris id nibh eu fermentum mattis purus?</Accordion.Header>
                        <Accordion.Body
                            style={{ textAlign: 'justify' }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2"
                        style={{ textAlign: 'justify' }}
                    >
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Eros imperdiet rhoncus?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3"
                        style={{ textAlign: 'justify' }}
                    >
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Fames imperdiet quam fermentum?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4"
                        style={{ textAlign: 'justify' }}
                    >
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Varius vitae, convallis amet lacus sit aliquet nibh?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5"
                        style={{ textAlign: 'justify' }}
                    >
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Tortor nisl pellentesque sit quis orci dolor?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6"
                        style={{ textAlign: 'justify' }}
                    >
                        <Accordion.Header><i className="fas fa-question-circle" style={{ paddingRight: '5px' }}></i>Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer />
        </>

    );
}

export default FAQ_Page;