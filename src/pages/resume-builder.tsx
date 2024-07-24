import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PersonalInfoData from "../types/PersonalInfoData";

function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({});

  return (
    <div className="md:flex md:flex-wrap pt-4">
      <div className="w-1/2">
        <PersonalInfo info={personalInfo} setInfo={setPersonalInfo} />
      </div>
      <h1 className="text-3xl font-bold underline grow">Resmue Preview</h1>
    </div>
  );
}

export default ResumeBuilder;
