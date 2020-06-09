import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";
import ButtonGroup from "../../components/Inputs/ButtonGroup";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|ButtonGroup", // 스토리북에서 보여질 그룹과 경로를 명시
  component: ButtonGroup // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        ButtonGroup
      </Typography>

      <Typography
        variant="body1"
        style={{
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        Orientation Horizontal
      </Typography>
      <ButtonGroup orientation="horizontal">
        <Button theme="primary">버튼</Button>
        <Button theme="cancel">버튼</Button>
      </ButtonGroup>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        Orientation Vertical
      </Typography>
      <ButtonGroup orientation="vertical">
        <Button theme="primary">버튼</Button>
        <Button theme="cancel">버튼</Button>
      </ButtonGroup>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        Disabled
      </Typography>
      <ButtonGroup orientation="horizontal" disabled>
        <Button theme="primary">버튼</Button>
        <Button theme="cancel">버튼</Button>
      </ButtonGroup>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        FullWidth
      </Typography>
      <ButtonGroup orientation="horizontal" fullWidth>
        <Button theme="primary">버튼</Button>
        <Button theme="cancel">버튼</Button>
      </ButtonGroup>
    </section>
  );
};
