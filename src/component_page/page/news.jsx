import { useEffect, useState } from "react";
import img1 from "../../assets/image/news1.jpg";
import img2 from "../../assets/image/news2.jpg";
import img3 from "../../assets/image/news3.jpg";
import img4 from "../../assets/image/news4.jpg";
import img5 from "../../assets/image/news5.jpg";
import img6 from "../../assets/image/news6.jpg";
import "../../style/newspage.css";
import { useNavigate } from "react-router-dom";
import request from "../../util/axios";
import axios from "axios";
const NewsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://116.103.20.59:5000/api/v1/news");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mockImage = [
    {
      id: 1,
      img_path: img1,
    },
    {
      id: 2,
      img_path: img2,
    },
    {
      id: 3,
      img_path: img3,
    },
    {
      id: 4,
      img_path: img4,
    },
    {
      id: 5,
      img_path: img5,
    },
    {
      id: 6,
      img_path: img6,
    },
    {
      id: 7,
      img_path: img1,
    },
    {
      id: 8,
      img_path: img2,
    },
  ];
  const navigate = useNavigate();

  const route_news_detail_id1 = () => {
    // navigate(`/news_detail/${dât}`);
    navigate("/news_detail");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "30px 0px", fontSize: "30px" }}>
        NEWS
      </h1>
      <div className="card-container">
        {data.map((item, index) => {
          const image =
            mockImage.find((img) => img.id === item.id)?.img_path || "";
          return (
            <div className="card" key={index} onClick={route_news_detail_id1}>
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default NewsPage;
