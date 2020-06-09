import "../../assets/reset.css";

import React from "react";

import Carousel from "../../components/Navigation/Carousel";
import Typography from "../../components/DataDisplay/Typography";

export default {
  title: "Navigation|Carousel", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Carousel // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const contentStyle = {
    width: "100%",
    padding: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const contents: React.ReactNode[] = [
    <div style={{ ...contentStyle, backgroundColor: "#000" }}>example 1</div>,
    <div style={{ ...contentStyle, backgroundColor: "#666" }}>example 2</div>,
    <div style={{ ...contentStyle, backgroundColor: "#aaa" }}>example 3</div>,
    <div style={{ ...contentStyle, backgroundColor: "#ddd" }}>example 4</div>,
    <div style={{ ...contentStyle, backgroundColor: "#fff" }}>example 5</div>
  ];

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ margin: "48px 0px" }}>
        Carousel
      </Typography>

      <Carousel contents={contents} />
    </section>
  );
};
