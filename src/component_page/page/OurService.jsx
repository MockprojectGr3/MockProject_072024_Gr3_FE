import { useEffect, useState } from "react";
import request from "../../util/axios";

function OurService() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      request({
        method: "get",
        serverType: "node",
        apiEndpoint: "our-service",
        onSuccess: (data) => {
          setData(data);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <center>
        <div className="text-gray-400">
          <p>
            <b>Our Service</b>
          </p>
          <hr className="text-gray-400 w-36" />
        </div>
        <h2 style={{ fontSize: 36 }}>OUR COMPREHENSIVE SECURITY SERVICES</h2>
        <div className="flex flex-row flex-wrap justify-between mt-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="items-center bg-black text-white text-left"
              style={{ height: 460, width: 366 }}
            >
              <div className="p-4">
                <h3 style={{ fontSize: 24, marginBottom: 14 }}>{item.name}</h3>
                <p style={{ fontSize: 15 }}>{item.description}</p>
              </div>
              <img src={item.url} alt={item.name} width="366" height="237" />
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default OurService;
