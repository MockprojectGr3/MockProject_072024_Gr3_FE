import Banner from "../page/banner";
import img from '../../assets/image/image2.jpg';

const TrainingDetail = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
        <Banner />
        <div className="bg-gray-100 p-12">
                <h1 className="text-2xl font-bold mb-6">Continoun the course</h1>
        

      {/* Course Content */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-3/12 bg-white p-4 rounded-lg shadow-md">
          <img className="w-full rounded-lg" src={img} alt="Course" />
          <h3 className="text-md font-semibold">Personal security</h3>
          <h3 className="text-md font-semibold">Test</h3>
          <button className="text-md font-bold mt-4 py-2 rounded flex items-center">
  Programming
  <span className="ml-2 bg-gray-900 text-white text-[10px] p-[2px] rounded-full flex items-center justify-center">&#x25BC;</span>
</button>

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-9/12 bg-white p-4 rounded-lg shadow-md">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center space-x-12">
                <h2 className="text-md font-semibold">Introduce</h2>
                <div className="text-gray-600">Duration: 3h</div>
                <div className="text-gray-600">Test</div>
            </div>

            <p className="text-gray-700 mt-2">
                <strong className="font-bold">Description:</strong> In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals.
            </p>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h3 className="text-md font-semibold">Lesson 1: Personal security</h3>
              <p className="text-gray-600 mt-1">Description: In crisis moments, our response to attacks is swift and strategic.</p>
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded">Start</button>
          </div>
        </div>
      </div>
      </div>

      {/* Lessons List */}
      <div className="w-6/12 mt-8 flex flex-col gap-4 mb-8 px-12">
        {['Personal security', 'Corporate security', 'Event security', 'Aviation security', 'Transportation security'].map((lesson, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold">Lesson {index + 1}: {lesson}</h3>
            <p className="text-gray-600 mt-1">
                <strong className="font-bold">Description:</strong> In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingDetail;
