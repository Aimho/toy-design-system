import "../../assets/reset.css";

import React, { useState } from "react";

import Typography from "../../components/DataDisplay/Typography";
import Loading from "../../components/Feedback/Loading";
import Button from "../../components/Inputs/Button";

export default {
  title: "Feedback|Loading", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Loading // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [active, setActive] = useState(false);

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Loading
      </Typography>

      <Button onClick={() => setActive(true)}>open loading</Button>

      <Loading active={active} />
    </section>
  );
};
