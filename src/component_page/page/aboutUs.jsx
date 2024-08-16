import AboutGuard from "../AboutGuard";
import ExpertsSecurity from "./ExpertsSecurity";
import OurService from "./OurService";
import ProfessionalTeam from "./ProfessionalTeam";

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
      <div className="mt-5">
        <ProfessionalTeam/>
      </div>
    </div>
  );
}

export default AboutUs;
