import { useState } from "react";
import PersonalInfoData from "../types/PersonalInfoData";
import PersonalInfoPreview from "./PersonalInfoPreview";

function PersonalInfo() {
  // TODO: Load from Local Storage in future;
  const [data, setData] = useState<PersonalInfoData>({});

  return (
    <div className="bg-white p-4 rounded-3xl shadow-md">
      <PersonalInfoPreview info={data} />
    </div>
  );
}

export default PersonalInfo;
