import "../../assets/reset.css";

import React, { useState } from "react";

import Typography from "../../components/DataDisplay/Typography";
import CheckboxGroup from "../../components/Inputs/CheckboxGroup";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|Checkbox", // 스토리북에서 보여질 그룹과 경로를 명시
  component: CheckboxGroup // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [value, onChange]: any = useState([]);

  const mockOptions: any = [
    {
      value: "Text Btn 1",
      label: "텍스트 버튼",
      disabled: false
    },
    {
      value: "Text Btn 2",
      label: "텍스트 버튼",
      disabled: false
    },
    {
      value: "Text Btn 3",
      label: "텍스트 버튼",
      disabled: true
    }
  ];

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Checkbox
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "12px", color: ColorSet.Gray_900 }}
      >
        value is {value.join(", ")}
      </Typography>

      <CheckboxGroup
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
      />

      <CheckboxGroup
        style={{
          marginTop: "60px"
        }}
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
        orientation="vertical"
      />
    </section>
  );
};
