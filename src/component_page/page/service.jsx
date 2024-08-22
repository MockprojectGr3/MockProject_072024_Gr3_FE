import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import request from '../../util/axios';
import '../../style/service.css';
import logopepsi from '../../assets/image/Pepsi-Logo.png';
import { CheckOutlined } from '@ant-design/icons';

const Service = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    const fetchServices = async () => {
        try {
            const response = await request({
                method: "get",
                serverType: "php",
                apiEndpoint: "api/users/services",
            });

            if (response.data.status === 200) {
                setServices(response.data.data);
            } else {
                console.error("Failed to fetch services: ", response.data.message);
            }
        } catch (error) {
            console.error("Failed to fetch services:", error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleRedirect = (id) => {
        navigate(`/service_detail/${id}`);
    };

    return (
        <>
            <div className='sv-container pb-20'>
                <h1 style={{ marginBottom: '35px', fontSize: '30px' }}>SERVICES</h1>
                <div className='sv-list'>
                    {services.map((item, index) => (
                        <div className="max-w-sm p-6"
                            key={index}
                            onClick={() => handleRedirect(item.id)}
                        >
                            <div className='img-sv'>
                                <img src={logopepsi} width={'100%'} alt={item.name} />
                            </div>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 text-white truncate">{item.name}</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 overflow-hidden text-ellipsis">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='intro-sv'>
                <h4 className="text-xl font-bold">You want to know about us, you are curious about what you can get.</h4>
                <h2 className="text-3xl font-bold mt-2">Come here with us!!!</h2>
                </div>
                <div className='info-sv'>
                    <div className='list-item'>
                        <div className='item'
                            onClick={() => handleRedirect(1)}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} alt="Shipping protection" />
                            <span className='su-text'>Shipping protection</span>
                        </div>
                        <div className='item'
                            onClick={() => handleRedirect(2)}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} alt="Custodi filios tuos" />
                            <span className='su-text'>Custodi filios tuos</span>
                        </div>
                        <div className='item'
                            onClick={() => handleRedirect(3)}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} alt="Tuam salutem cum monitored aut minati" />
                            <span className='su-text'>Tuam salutem cum monitored aut minati</span>
                        </div>
                        <div className='item'
                            onClick={() => handleRedirect(4)}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} alt="Protection from surveillance and threats" />
                            <span className='su-text'>Protection from surveillance and threats</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='lst-info'>
                            <span className='su-caption'>
                                <span style={{ fontWeight: 'bold' }}>OUR</span> SERVICES
                            </span>
                            <br />
                            <span className='su-title'>
                                Fideles comites fiamus
                            </span><br />
                            <div className='mark-info'>
                                <CheckOutlined className='customicon' />
                                <span className='su-subtitle'>
                                    Turma satellitum bene exercitata est
                                </span><br />
                                <CheckOutlined className='customicon' />
                                <span className='su-subtitle'>
                                    Processus muneris professionalis
                                </span><br />
                                <CheckOutlined className='customicon' />
                                <span className='su-subtitle'>
                                    Commendatio ad salutem et securitatem
                                </span><br />
                                <CheckOutlined className='customicon' />
                                <span className='su-subtitle'>
                                    Auctoritates auctorum et diversa officia
                                </span><br />
                                <button className='btn btn-primary' style={{ marginTop: '20px' }}>
                                    More Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Service;
