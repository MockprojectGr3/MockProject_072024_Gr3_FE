import img_news from '../../assets/image/news2.jpg';
import '../../style/news_detail.css';
import avatar from '../../assets/image/news6.jpg';


const News_DeTail_Page = () => {
    return (
        <>
            <div className="container-news" style={{ textAlign: 'justify', display: 'block' }}>
                <div className="title-news">
                    <span className="type-news">Innovation</span>
                    <span className="time-news">2 Hours ago</span>
                    <h1 className="caption-news">
                        John Lewis, civil rights giant, crosses infamous Selma bridge one final time
                    </h1>
                    <div className="author-news">

                        <img className='avatar' src={avatar} />
                        <span className="name">
                            Cameron Williamson
                        </span>
                    </div>
                    <div className="icon-news">
                        <i className="far fa-heart" style={{ color: '#74C0FC' }}></i><span>521k</span>
                        <i className="far fa-comment-alt" style={{ color: '#74C0FC' }}></i><span>80k</span>
                        <i className="fa fa-share-alt" style={{ color: '#74C0FC' }}></i><span>23k</span>
                    </div>
                </div>
                <div className="img-news">
                    <img className="img-ger" src={img_news} />
                </div>
                <div className="content-news">
                    <p>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic innovation via workplace diversity and empowerment.
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. content in real-time will have multiple touchpoints for offshoring.
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information

                    </p>
                    <p>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>

                    <p>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>

                </div>
            </div>
        </>
    )
}
export default News_DeTail_Page;