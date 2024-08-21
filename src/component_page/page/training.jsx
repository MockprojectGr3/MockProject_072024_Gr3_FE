import Banner from "../page/banner";
import img from '../../assets/image/image2.jpg';
import { useState } from "react";
import request from "../../util/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/training.css";

const Training = () => {

  let setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }


  const [listCourseTrain, setListCourseTrain] = useState([]);
  const fecthLstCourseTrain = async () => {
    const res = await fetch('http://116.103.20.59:5000/api/v1/training-courses')
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json();
    console.log('Fetched data: ', data);
    setListCourseTrain(data)
    console.log('Check state: ', listCourseTrain)
  }
  fecthLstCourseTrain();

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <Banner />
        <div className="bg-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-6">Continoun the course</h1>

          <div className="flex space-x-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center flex-grow">
              <img src={img} alt="Personal security" className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div className="flex-grow">
                <h2 className="font-semibold text-lg">Personal security</h2>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <span className="text-gray-600 ml-2">50%</span>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md w-64">
              <h3 className="font-semibold">Lesson 1</h3>
              <p className="text-sm">Personal security</p>
              <p className="text-sm text-gray-600">Time: 30 date</p>
            </div>

            <div className="flex justify-end">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <p className="text-sm font-semibold">Studying (1)</p>
                <p className="text-sm font-semibold">Learned (2)</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold px-12">List the course</h1>

        <div className="p-8">
          <Slider {...setting}>
            {listCourseTrain && listCourseTrain.map((item) => (
              <div key={item} className="bg-black text-white rounded-lg overflow-hidden">
                <img src={img} alt="Course" className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Course {item}</h3>
                  <p className="text-sm">Description: In crisis moments, our response to attacks is swift.</p>
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
