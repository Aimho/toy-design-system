import "../../assets/reset.css";

import React, { useState } from "react";

import Typography from "../../components/DataDisplay/Typography";
import Switch from "../../components/Inputs/Switch";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|Switch", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Switch // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [checked, setChecked] = useState(false);

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Switch
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "12px", color: ColorSet.Gray_900 }}
      >
        value is {checked.toString()}
      </Typography>

      <Switch
        checked={checked}
        label="텍스트 버튼"
        onChange={checked => setChecked(checked)}
      />
    </section>
  );
};
