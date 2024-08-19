function ExpertsSecurity() {
  return (
    <div>
      <center>
        <div className="text-gray-400">
          <p>
            <b>EXPERTS SECURITY</b>
          </p>
          <hr className="text-gray-400 w-36" />
        </div>
        <h2 style={{ fontSize: 36 }}>
          OUR COMPREHENSIVE SECURITY PLANNING - ENSURING YOUR SAFETY
        </h2>
      </center>
      <div className="flex mt-5">
        <div className="col">
          <img
            src="./src/assets/image/experts.png"
            style={{ height: 480, width: 540 }}
          ></img>
        </div>
        <div className="col text-gray-500 mt-5 gap-4">
          <p className="text-center">
            At Experts Security, our focus is on creating a security plan that
            prioritizes your safety. <br /> With expertise in security planning,
            we design comprehensive strategies tailored to your specific needs.
            Trust us to be your dedicated partners, ensuring a secure
            environment with effective and carefully crafted security measures.
          </p>
          <ul className="list-disc pl-4 list-outside">
            <li className="pb-3">
              <b className="text-black">RISK ASSESSMENTS:</b> Rigorous
              evaluation of potential threats and vulnerabilities to develop a
              clear understanding of the security landscape, ensuring proactive
              <br />
              measures are in place.
            </li>
            <li className="pb-3">
              <b className="text-black">TAILORED SOLUTIONS:</b> Crafting
              customized security plans to address the unique needs of each
              client, providing a personalized approach that aligns with
              specific
              <br /> risks and requirements.
            </li>
            <li className="pb-3">
              <b className="text-black">DYNAMIC ADAPTABILITY:</b> Continual
              review and adaptation of security plans to respond to evolving
              threats, ensuring that our strategies remain effective and
              <br />
              resilient in the ever-changing security environment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExpertsSecurity;
