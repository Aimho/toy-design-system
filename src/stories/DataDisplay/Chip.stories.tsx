import "../../assets/reset.css";

import React from "react";

import Chip from "../../components/DataDisplay/Chip";
import Typography from "../../components/DataDisplay/Typography";
import { ColorSet } from "../../utils/theme";

export default {
  title: "DataDisplay|Chip", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Chip // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Chip
      </Typography>

      <div style={{ marginBottom: "12px" }}>
        <Chip
          label={"텍스트"}
          style={{ marginRight: "50px" }}
          labelColor={ColorSet.Primary_500}
          backgroundColor={ColorSet.Primary_50}
        />
        <Chip
          label={"텍스트"}
          variant="outlined"
          labelColor={ColorSet.Primary_500}
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Chip label={"텍스트"} style={{ marginRight: "50px" }} />
        <Chip label={"텍스트"} variant="outlined" />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Chip
          label={"텍스트"}
          style={{ marginRight: "50px" }}
          labelColor={ColorSet.Error_Base}
          backgroundColor={ColorSet.Error_Light}
        />
        <Chip
          label={"텍스트"}
          variant="outlined"
          labelColor={ColorSet.Error_Base}
        />
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Chip
          label={"텍스트"}
          style={{ marginRight: "50px" }}
          labelColor={ColorSet.Warning_Base}
          backgroundColor={ColorSet.Warning_Light}
        />
        <Chip
          label={"텍스트"}
          variant="outlined"
          labelColor={ColorSet.Warning_Base}
        />
      </div>
    </section>
  );
};
