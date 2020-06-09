import "../../assets/reset.css";

import React, { useState } from "react";

import AppBar from "../../components/Surface/AppBar";
import Typography from "../../components/DataDisplay/Typography";
import RadioGroup from "../../components/Inputs/RadioGroup";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Surface|AppBar", // 스토리북에서 보여질 그룹과 경로를 명시
  component: AppBar // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [position, setPosition]: any = useState("relative");

  const options: any = [
    {
      value: "absolute",
      label: "absolute"
    },
    {
      value: "fixed",
      label: "fixed"
    },
    {
      value: "relative",
      label: "relative"
    },
    {
      value: "static",
      label: "static"
    },
    {
      value: "sticky",
      label: "sticky"
    }
  ];

  return (
    <section
      style={{
        padding: "40px",
        height: "500px",
        overflowY: "auto",
        position: "relative"
      }}
    >
      <Typography variant="h2" style={{ margin: "48px 0px" }}>
        AppBar
      </Typography>

      <div style={{ height: "100vh" }}>
        <AppBar
          style={{ padding: "16px 32px", color: ColorSet.Gray_600 }}
          backgroundColor={ColorSet.Primary_900}
          position={position}
        >
          <Typography variant="subtitle1" maxWidth={500}>
            Lorem ipsum dolor sit amet,
          </Typography>
        </AppBar>

        <RadioGroup
          style={{ position: "fixed", top: "450px", color: "#fff" }}
          options={options}
          value={position}
          onChange={position => setPosition(position)}
        />
      </div>
    </section>
  );
};
