import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/image/news2.jpg';
import img2 from '../../assets/image/news4.jpg';
import img from '../../assets/image/news6.jpg';
import '../../style/service_detail.css';
import request from '../../util/axios';

const ServiceDetailPage = () => {
    const navigate = useNavigate();

    const handleRedirectService = async () => {
        try {
            const response = await request({
                method: "get",
                serverType: "php",
                apiEndpoint: "api/users/detail-service/{id}",
            });
            console.log("Data:", response.data);
            navigate('/choose-services');
        } catch (error) {
            console.error("Error fetching service details:", error);
        }
    };

    return (
        <div className="service-detail-container">
            <div className="service-intro">
                <div className="service-text">
                    <div className="title">LIBEROS TUOS PROTEGE</div>
                    <div className="caption">
                        Pueri in suis annis teenage: Facillime seducti et manipulati
                        Insanae operationes: Medicamenta, alea, mala socialia
                        Preoccupo negativa confligant: affectibus natorum salutem et futuram
                    </div>
                </div>
                <div className="service-img">
                    <div>
                        <div className="bg-img1"></div>
                        <img className="img1" src={img} alt="Service Image 1" />
                    </div>
                    <img className="img2" src={img} alt="Service Image 2" />
                    <img className="img3" src={img} alt="Service Image 3" />
                </div>
                <button className="btn-select" onClick={handleRedirectService}>
                    Select
                </button>
            </div>
            <h1>OUR WORK</h1>
            <Carousel
                autoPlay
                dynamicHeight
                transitionTime={1500}
                showStatus={true}
                showThumbs={false}
                interval={2000}
                infiniteLoop
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
                    <img src={img} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} alt="Work 1" />
                </div>
                <div>
                    <img src={img1} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} alt="Work 2" />
                </div>
                <div>
                    <img src={img2} style={{ objectFit: "cover", width: "90%", height: "600px", borderRadius: '40px' }} alt="Work 3" />
                </div>
            </Carousel>
        </div>
    );
};

export default ServiceDetailPage;