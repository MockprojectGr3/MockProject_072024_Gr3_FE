import img1 from '../../assets/image/news1.jpg';
import img2 from '../../assets/image/news2.jpg';
import img3 from '../../assets/image/news3.jpg';
import img4 from '../../assets/image/news4.jpg';
import img5 from '../../assets/image/news5.jpg';
import img6 from '../../assets/image/news6.jpg';
import '../../style/newspage.css';
import Footer from '../layout/Footer.jsx';
import Header from '../layout/header.jsx';
const NewsPage = () => {
    // const data= [
    //     {
    //         id: 1,
    //         title: ''
    //     }
    // ]
    return (
        <>
            <Header />
            <h1 style={{ textAlign: 'center', margin: '30px 0px', fontSize: '30px' }}>NEWS</h1>
            <div className="card-container">

                <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={img6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className='card-title'>John Lewis to make final journey across Edmund Pettus Bridge in procession</h5>
                        <p className="card-text">The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default NewsPage;