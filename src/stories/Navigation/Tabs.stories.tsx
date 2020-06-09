import "../../assets/reset.css";

import React, { useState } from "react";

import Tabs from "../../components/Navigation/Tabs";
import Typography from "../../components/DataDisplay/Typography";

export default {
  title: "Navigation|Tabs", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Tabs // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [target, setTarget] = useState(0);
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ margin: "48px 0px" }}>
        Tabs
      </Typography>

      <Tabs
        value={target}
        onChange={setTarget}
        options={["Active", "Active", "Active"]}
      />
    </section>
  );
};
