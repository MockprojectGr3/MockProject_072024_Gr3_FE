
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from 'antd';
import Slider from "react-slick";

import Banner from "../page/banner";
import img from '../../assets/image/image2.jpg';

import request from "../../util/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/training.css";
import { useNavigate } from "react-router-dom";

const Training = () => {

  const [listCourseTrain, setListCourseTrain] = useState([]);

  const fetchLstCourseTrain = async () => {
    const res = await fetch('http://116.103.20.59:5000/api/v1/training-courses');
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    setListCourseTrain(data);
  }

  useEffect(() => {
    fetchLstCourseTrain();
  }, []);

  let setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const navigate = useNavigate();

  const handleRedirectDetailTrain = (id) => {
    navigate(`/training-detail/${id}`);
  }

  const firstCourse = listCourseTrain[0] || {};

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <Banner />
        <div className="bg-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-6">Continue the course</h1>

          <div className="flex space-x-4 mb-4">
            {firstCourse && (
              <>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center flex-grow"
                  style={{ cursor: 'pointer' }}
                  onClick={handleRedirectDetailTrain}
                >
                  <img src={img} alt="Personal security" className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div className="flex-grow">
                    <h2 className="font-semibold text-lg">{firstCourse.name}</h2>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <span className="text-gray-600 ml-2">50%</span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md w-64">
                  <h3 className="font-semibold">Lesson 1</h3>
                  <p className="text-sm">{firstCourse.name}</p>
                  <p className="text-sm text-gray-600">Time: {firstCourse.dur}</p>
                </div>

                <div className="flex justify-end">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-sm font-semibold">Studying (1)</p>
                    <p className="text-sm font-semibold">Learned (2)</p>
                  </div>
                </div>
              </>

            )}


          </div>
        </div>

        <h1 className="text-2xl font-bold px-12">List the course</h1>

        <div className="p-8">
          <Slider {...setting}>
            {listCourseTrain.map((item) => (
              <div key={item.course_id} className="train-box bg-black text-white rounded-lg overflow-hidden"
                onClick={() => handleRedirectDetailTrain(item.course_id)}
              >
                <img src={img} alt="Course" className="w-full object-cover" />
                <div className="p-4-train">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm">Description: {item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </>
  );
};

export default Training;
