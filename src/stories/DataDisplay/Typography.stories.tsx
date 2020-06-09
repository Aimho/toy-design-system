import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";

export default {
  title: "DataDisplay|Typography", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Typography // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const dummyText = "온라인 제조 서비스";
  const fontWeights = [400, 500, 600];
  const variants = [
    { label: "40pt", value: "h1" },
    { label: "32pt", value: "h2" },
    { label: "25pt", value: "h3" },
    { label: "20pt", value: "h4" },
    { label: "16pt", value: "h5" },
    { label: "14pt", value: "h6" },
    { label: "12pt", value: "caption" }
  ];

  const tdStyle = {
    padding: "24px"
  };

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Roboto typeface
      </Typography>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>400(Regular)</th>
            <th>500(Medium)</th>
            <th>600(Bold)</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, v_index) => (
            <tr key={v_index}>
              <td style={tdStyle}>{variant.label}</td>
              {fontWeights.map((weight, w_index) => {
                if (variant.value === "caption" && weight !== 400) return null;

                return (
                  <td key={w_index} style={tdStyle}>
                    <Typography
                      variant={variant.value as any}
                      fontWeight={weight as any}
                    >
                      {dummyText}
                    </Typography>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
