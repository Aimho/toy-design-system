import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Datepicker from "../../components/Inputs/Datepicker";

export default {
  title: "Inputs|Datepicker", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Datepicker // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [value, setValue] = React.useState("");

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Datepicker
      </Typography>

      <div style={{ width: 350 }}>
        <Datepicker value={value} onChange={setValue} />
      </div>
    </section>
  );
};
