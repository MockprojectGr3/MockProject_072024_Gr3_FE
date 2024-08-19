import img1 from '../../assets/image/news1.jpg';
import img2 from '../../assets/image/news2.jpg';
import img3 from '../../assets/image/news3.jpg';
import img4 from '../../assets/image/news4.jpg';
import img5 from '../../assets/image/news5.jpg';
import img6 from '../../assets/image/news6.jpg';
import '../../style/newspage.css';
import { useNavigate } from 'react-router-dom';
const NewsPage = () => {

    const data = [
        {
            id: 1,
            title: 'John Lewis to make final journey across Edmund Pettus Bridge in procession',
            content: 'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.',
            img_path: img1
        },
        {
            id: 2,
            title: 'John Lewis, civil rights giant, crosses infamous Selma bridge one final time',
            content: 'Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge',
            img_path: img2
        },
        {
            id: 3,
            title: 'John Lewis, civil rights giant, crosses infamous Selma bridge one final time',
            content: 'Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge',
            img_path: img3
        },
        {
            id: 4,
            title: 'Tornado and tide warnings as Storm Hanna lashes Texas',
            content: 'The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.',
            img_path: img4
        },
        {
            id: 5,
            title: '20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed',
            content: 'This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.',
            img_path: img5
        },
        {
            id: 6,
            title: '20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed',
            content: 'This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.',
            img_path: img6
        }
    ]
    const navigate = useNavigate();

    const route_news_detail_id1 = () => {
        // navigate(`/news_detail/${item}`);
        navigate('/news_detail')
    }
    return (
        <>
            <h1 style={{ textAlign: 'center', margin: '30px 0px', fontSize: '30px' }}>NEWS</h1>
            <div className="card-container">
                {
                    data.map((item, index) => {
                        return (
                            <div className="card"
                                key={index}
                                onClick={route_news_detail_id1}
                            >
                                <img src={item.img_path} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className="card-text">{item.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}
export default NewsPage;