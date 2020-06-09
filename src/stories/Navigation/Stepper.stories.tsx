import "../../assets/reset.css";

import React, { useState } from "react";

import Stepper from "../../components/Navigation/Stepper";
import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";

export default {
  title: "Navigation|Stepper", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Stepper // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [step, setStep] = useState(0);
  const options = [
    "서비스 선택",
    "도면 업로드 및 제조 방식 선택",
    "프로젝트 정보 입력",
    "프고객 정보 확인"
  ];
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ margin: "48px 0px" }}>
        Stepper
      </Typography>

      <Stepper activeStep={step} options={options} />

      <Button
        style={{ marginRight: "24px" }}
        theme="primary"
        onClick={() => setStep(s => (s < 0 ? 0 : s - 1))}
      >
        Back
      </Button>
      <Button
        theme="primary"
        onClick={() =>
          setStep(s => (s < options.length ? s + 1 : options.length))
        }
      >
        Next
      </Button>
    </section>
  );
};
