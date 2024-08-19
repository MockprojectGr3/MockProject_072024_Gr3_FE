import '../../style/service.css';
import logopepsi from '../../assets/image/Pepsi-Logo.png';
import { CheckOutlined, ImportOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

const Service = () => {
    const listservice = [
        {
            id: 1,
            name: 'Asset Protection',
            desciption: 'Property and facility protection services.',
            img_path: logopepsi
        },
        {
            id: 2,
            name: 'Personal Protection',
            desciption: 'Security services for VIP individuals, celebrities and famous people',
            img_path: logopepsi
        },
        {
            id: 3,
            name: 'Event Protection',
            desciption: 'Providing information and security services for major events.',
            img_path: logopepsi
        },
        {
            id: 4,
            name: 'Security patrol service',
            desciption: 'Patrol and security surveillance services',
            img_path: logopepsi
        }
    ]
    const navigate = useNavigate();
    const handle_redirect = (id) => {
        // console.log('Check id: ', id)
        navigate('/service_detail')
    }
    return (
        <>
            <div className='sv-container'>
                <h1 style={{ marginBottom: '35px', fontSize: '30px' }}>SERVICES</h1>
                <div className='sv-list'>
                    {
                        listservice.map((item, index) => {
                            return (
                                <div className="max-w-sm p-6 "
                                    key={index}
                                    onClick={() => handle_redirect(item.id)}
                                >
                                    <div className='img-sv'>
                                        <img src={item.img_path} width={'100%'} />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{item.desciption}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='intro-sv'>
                    <h4 className='intro-sub'>You want to know about us, you are curious about what you can get. </h4>
                    <h2 className='intro-wel'>Come here with us!!!</h2>
                </div>
                <div className='info-sv'>
                    <div className='list-item'>
                        <div className='item'
                            onClick={handle_redirect}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} />
                            <span className='su-text'>Shipping protection
                            </span>
                        </div>
                        <div className='item'
                            onClick={handle_redirect}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} />
                            <span className='su-text'>Custodi filios tuos
                            </span>
                        </div>
                        <div className='item'
                            onClick={handle_redirect}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} />
                            <span className='su-text'>Tuam salutem cum monitored aut minati
                            </span>
                        </div>
                        <div className='item'
                            onClick={handle_redirect}
                        >
                            <img className='icon' src={logopepsi} width={'120px'} />
                            <span className='su-text'>Protection from surveillance and threats
                            </span>
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
    )
}
export default Service;