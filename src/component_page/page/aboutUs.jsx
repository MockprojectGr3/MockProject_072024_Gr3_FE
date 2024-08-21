import AboutGuard from "../AboutGuard";
import Banner from "./banner";
import OurService from "./OurService";
import ExpertsSecurity from "./ExpertsSecurity";
import ProfessionalTeam from "./ProfessionalTeam";
import SecurityPage from "./SecurityPage";

function ABoutUs() {
  return (
    <div>
      <Banner />
      <div className="mx-24 mt-5 mb-5">
        <AboutGuard />
      </div>
      <div className="mx-24 pt-5 mb-5">
        <OurService />
      </div>
      <div className="mx-24 pt-5 mb-5">
        <ExpertsSecurity />
      </div>
      <div className="mx-24 pt-5 mb-5">
        <ProfessionalTeam />
      </div>
      <div className="mx-24 pt-5 mb-5">
        <SecurityPage />
      </div>
    </div>
  );
}

export default ABoutUs;