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
      <div className="mx-24">
        <AboutGuard />
      </div>
      <div className="mx-24">
        <OurService />
      </div>
      <div className="mx-24">
        <ExpertsSecurity />
      </div>
      <div className="mx-24">
        <ProfessionalTeam />
      </div>
      <div className="mx-24">
        <SecurityPage />
      </div>
    </div>
  );
}

export default ABoutUs;