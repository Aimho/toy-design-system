import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Select from "../../components/Inputs/Select";

export default {
  title: "Inputs|Select", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Select // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyCanvas = () => {
  const options = [
    {
      value: "value1",
      label: (
        <>
          label1 <span style={{ color: "red" }}>태그 요소</span>
        </>
      )
    },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
    { value: "value4", label: "label4", disabled: true }
  ];
  const [value, setValue]: any = React.useState("value2");
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Select
      </Typography>

      <div style={{ width: 350 }}>
        <Select
          size="small"
          options={options}
          value={value}
          onChange={value => setValue(value)}
        />
      </div>
    </section>
  );
};
