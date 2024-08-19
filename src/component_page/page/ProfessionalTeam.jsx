function ProfessionalTeam() {
  const mockData = [
    {
      id: 1,
      name: "John Smith",
      position: "Chief Security Officer",
      image: "./src/assets/image/professional1.png",
    },
    {
      id: 2,
      name: "Michael Turner",
      position: "Head of Security Training",
      image: "./src/assets/image/professional2.png",
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "Lead Security Investigator",
      image: "./src/assets/image/professional3.png",
    },
  ];
  return (
    <div>
      <center>
        <div className="text-gray-400">
          <p>
            <b>OUR TEAM</b>
          </p>
          <hr className="text-gray-400 w-36" />
        </div>
        <h2 style={{ fontSize: 36 }}>OUR PROFESSIONAL TEAM</h2>
        <p className="mt-3 mb-5">
          Arcu augue tristique elementum gravida lectus risus. Tortor nibh a
          amet eu blandit
          <br /> vitae at odio in. Eget lectus viverra dignissim in leo. Nunc.
        </p>
      </center>
      <div className="flex flex-wrap justify-center gap-10">
        {mockData.map((item) => (
          <div key={item.id} className="flex flex-col items-center ms-5">
            <img
              className="rounded-full w-72 h-72 object-cover"
              src={item.image}
              alt={item.name}
            />
            <h3 className="m-3 text-3xl">
              <b>{item.name}</b>
            </h3>
            <p className="text-gray-600">{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalTeam;
