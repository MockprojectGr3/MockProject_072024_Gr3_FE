import '../../style/service_detail.css';
import img from '../../assets/image/news6.jpg';
import img1 from '../../assets/image/news2.jpg';
import img2 from '../../assets/image/news4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

const Service_Detail_Page = () => {
    const navigate = useNavigate();
    const handle_redirect_service = () => {
        navigate('/choose-services')
    }
    return (
        <>
            <div className="service-detail-container">
                <div className="service-intro">
                    <div className="service-text">
                        <div className="title">
                            LIBEROS TUOS PROTEGE
                        </div>
                        <div className="caption">
                            Pueri in suis annis teenage: Facillime seducti et manipulati
                            Insanae operationes: Medicamenta, alea, mala socialia
                            Preoccupo negativa confligant: affectibus natorum salutem et futuram
                        </div>
                    </div>
                    <div className="service-img">
                        <div>
                            <div className="bg-img1"></div>
                            <img className="img1" src={img} />
                        </div>

                        <img className="img2" src={img} />
                        <img className="img3" src={img} />
                    </div>
                    <button className="btn-select"
                        onClick={handle_redirect_service}
                    >
                        Select
                    </button>

                </div>
                <h1>OUR WORK</h1>
                <Carousel
                    autoPlay={true}
                    dynamicHeight={true}
                    transitionTime={1.5}
                    showStatus={true}
                    showThumbs={false}
                    interval={2000}
                    infiniteLoop={true}
                    style={{
                        position: 'relative'
                    }}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button onClick={onClickHandler} title={label} className="carousel-button prev">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button onClick={onClickHandler} title={label} className="carousel-button next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        )
                    }
                >
                    <div>
                        <img src={img} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                    <div>
                        <img src={img1} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                    <div>
                        <img src={img2} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                    <div>
                        <img src={img2} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                    <div>
                        <img src={img1} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                    <div>
                        <img src={img} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} />
                    </div>
                </Carousel>
            </div>
        </>
    )
}
export default Service_Detail_Page;