import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";
import ButtonGroup from "../../components/Inputs/ButtonGroup";
import Hidden from "../../components/Layout/Hidden";

export default {
  title: "Layout|Hidden", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hidden // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  // knobs
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Hidden
      </Typography>

      <ButtonGroup orientation="vertical">
        <Hidden smDown>
          <Button>sm down button</Button>
        </Hidden>
        <Hidden mdDown>
          <Button>md down button</Button>
        </Hidden>
        <Hidden lgDown>
          <Button>lg down button</Button>
        </Hidden>
        <Hidden xsDown>
          <Button>xs down button</Button>
        </Hidden>
        <Button>button</Button>
      </ButtonGroup>
    </section>
  );
};
