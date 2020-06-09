import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import TextField from "../../components/Inputs/TextField";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|TextField", // 스토리북에서 보여질 그룹과 경로를 명시
  component: TextField // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [value, setValue] = React.useState("");

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        TextField
      </Typography>

      <div style={{ width: 350 }}>
        <TextField
          size="small"
          value={value}
          onChange={setValue}
          placeholder="placeholder"
        />
      </div>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        HelperText
      </Typography>
      <div style={{ width: 350 }}>
        <TextField
          readonly
          value={value}
          onChange={setValue}
          placeholder="placeholder"
          label="라벨"
          helperText={
            <Typography variant="caption">
              도움말 or 오류 문구를 적을 수 있습니다.
            </Typography>
          }
        />
      </div>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        TextArea(Multiline)
      </Typography>
      <div style={{ width: 350 }}>
        <TextField
          value={value}
          onChange={setValue}
          placeholder="placeholder"
          multiline
        />
      </div>
    </section>
  );
};
