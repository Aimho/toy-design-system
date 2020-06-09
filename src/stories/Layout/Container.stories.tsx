import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Container from "../../components/Layout/Container";

import { ColorSet } from "../../utils/theme";

export default {
  title: "Layout|Container", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Container // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const maxWidth = {
    xl: 1280,
    sm: 375
  };

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Container
      </Typography>
      <Container
        style={{ color: ColorSet.Gray_900, padding: "24px" }}
        backgroundColor={ColorSet.Background_Dark}
        maxWidth={maxWidth}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Container>
    </section>
  );
};
