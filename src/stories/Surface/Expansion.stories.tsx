import "../../assets/reset.css";

import React from "react";

import Expansion from "../../components/Surface/Expansion";
import Typography from "../../components/DataDisplay/Typography";

export default {
  title: "Surface|Expansion", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Expansion // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section
      style={{
        padding: "40px",
        height: "500px",
        overflowY: "auto",
        position: "relative"
      }}
    >
      <Typography variant="h2" style={{ margin: "48px 0px" }}>
        Expansion
      </Typography>

      <div style={{ height: "100vh" }}>
        <Expansion summary={"Expansion"}>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet,
          </Typography>
        </Expansion>
        <Expansion summary={"Expansion"}>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet,
          </Typography>
        </Expansion>
      </div>
    </section>
  );
};
