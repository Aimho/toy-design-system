import "../../assets/reset.css";

import React, { useState } from "react";

import Typography from "../../components/DataDisplay/Typography";
import RadioGroup from "../../components/Inputs/RadioGroup";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|Radio", // 스토리북에서 보여질 그룹과 경로를 명시
  component: RadioGroup // 어떤 컴포넌트를 문서화 할지 명시
};

const mockOptions: any = [
  {
    value: "1",
    label: "텍스트 버튼",
    disabled: false
  },
  {
    value: "2",
    label: "텍스트 버튼",
    disabled: false
  },
  {
    value: "3",
    label: "텍스트 버튼",
    disabled: true
  }
];

export const StroyBasic = () => {
  const [value, onChange] = useState(mockOptions[0].value);

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Radio
      </Typography>

      <Typography
        variant="body1"
        style={{ marginBottom: "12px", color: ColorSet.Gray_900 }}
      >
        value is {value}
      </Typography>

      <RadioGroup
        style={{ margin: "20px" }}
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
      />

      <RadioGroup
        style={{ margin: "20px" }}
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
        type="button"
      />

      <RadioGroup
        style={{ margin: "20px" }}
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
        orientation="vertical"
      />

      <RadioGroup
        style={{ margin: "20px" }}
        options={mockOptions}
        value={value}
        onChange={value => onChange(value)}
        orientation="vertical"
        type="button"
        hoverHighlight={true}
      />
    </section>
  );
};
