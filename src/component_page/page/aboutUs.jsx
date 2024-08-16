import AboutGuard from "../AboutGuard";
import ExpertsSecurity from "./ExpertsSecurity";
import OurService from "./OurService";

function AboutUs() {
  return (
    <div className="container px-24">
      <div className="mt-5">
        <AboutGuard />
      </div>
      <div className="mt-5">
        <OurService />
      </div>
      <div className="mt-5">
        <ExpertsSecurity />
      </div>
    </div>
  );
}

export default AboutUs;
