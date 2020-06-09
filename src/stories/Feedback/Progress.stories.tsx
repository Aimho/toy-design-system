import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Progress from "../../components/Feedback/Progress";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Feedback|Progress", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Progress // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Progress
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "12px", color: ColorSet.Gray_900 }}
      >
        Circle Progress
      </Typography>
      <Progress type={"circle"} />

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        Line Progress
      </Typography>
      <Progress type={"line"} />
    </section>
  );
};
