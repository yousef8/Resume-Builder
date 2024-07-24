import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PersonalInfoData from "../types/PersonalInfoData";
import ResumePreview from "../components/ResumePreview";

function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({});

  return (
    <div className="md:flex md:flex-wrap pt-4">
      <div className="grow mr-4">
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
      </div>
      <div className="grow">
        <ResumePreview info={personalInfo} />
      </div>
    </div>
  );
}

export default ResumeBuilder;
