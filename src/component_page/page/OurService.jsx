function OurService() {
  const mockData = [
    {
      id: 1,
      title: "Risk Management",
      description:
        "In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals. We stand as a reliable force, committed to neutralizing threats and safeguarding your security with integrity.",
      image: "./src/assets/image/ser1.png",
    },
    {
      id: 2,
      title: "Crisis Management",
      description:
        "In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals. We stand as a reliable force, committed to neutralizing threats and safeguarding your security with integrity..",
      image: "./src/assets/image/ser2.png",
    },
    {
      id: 3,
      title: "Security Management",
      description:
        "In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals. We stand as a reliable force, committed to neutralizing threats and safeguarding your security with integrity..",
      image: "./src/assets/image/ser3.png",
    },
  ];
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
          {mockData.map((item) => (
            <div
              key={item.id}
              className="items-center bg-black text-white text-left"
              style={{ height: 460, width: 366 }}
            >
              <div className="p-4">
                <h3 style={{ fontSize: 24, marginBottom: 14 }}>{item.title}</h3>
                <p style={{ fontSize: 15 }}>{item.description}</p>
              </div>
              <img src={item.image} alt={item.title} width="366" height="237" />
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default OurService;
