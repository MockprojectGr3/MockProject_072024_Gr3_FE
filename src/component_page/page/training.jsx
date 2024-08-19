import Banner from "../page/banner";
import img from '../../assets/image/image2.jpg';

const Training = () => {
    return (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12 p-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-black text-white rounded-lg overflow-hidden">
                <img src={img} alt="Course" className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">List the course</h3>
                  <p className="text-sm">Description: In crisis moments, our response to attacks is swift .</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Training;
