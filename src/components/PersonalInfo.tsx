import { useState } from "react";
import PersonalInfoData from "../types/PersonalInfoData";
import PersonalInfoPreview from "./PersonalInfoPreview";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo() {
  // TODO: Load from Local Storage in future;
  const [data, setData] = useState<PersonalInfoData>({});

  if (data) {
    return <PersonalInfoPreview info={data} />;
  }

  return <PersonalInfoForm />;
}

export default PersonalInfo;
