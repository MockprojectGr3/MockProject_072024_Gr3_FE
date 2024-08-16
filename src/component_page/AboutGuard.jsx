function AboutGuard() {
  return (
    <div>
      <center>
        <div className="text-gray-400">
          <p>
            <b>ABOUT GUARDGRID</b>
          </p>
          <hr className="text-gray-400 w-36" />
        </div>
        <h2 style={{ fontSize: 36 }}>
          WE PROVIDES SECURITY SECURITY WITH SMART
          <br /> FEATURES SINCE 2000
        </h2>
        <div className="flex flex-row flex-wrap justify-between bg-white text-gray-600 mt-5">
          <div className="text-left">
            <p>
              Our commitment to safety is embedded in the innovative
              technologies we <br /> employ to keep you protected.
            </p>
            <div className="flex gap-5 ms-4">
              <ul className="text-left list-disc">
                <li>Established in 2000</li>
                <li>Trusted security provider</li>
                <li>
                  Smart features for enhanced
                  <br /> safety
                </li>
              </ul>
              <ul className="text-left list-disc">
                <li>Two decades of experience</li>
                <li>Innovative security solutions</li>
                <li>Prioritizing your safety</li>
              </ul>
            </div>
            <button className="bg-gray-800 p-2 px-3 mt-4 rounded-lg text-white">
              READ MORE
            </button>
          </div>
          <div className="flex">
            <div className="col">
              <img src="./src/assets/image/guard1.png"></img>
              <img src="./src/assets/image/guard2.png"></img>
            </div>
            <div className="col">
              <img src="./src/assets/image/guard3.png"></img>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default AboutGuard;
