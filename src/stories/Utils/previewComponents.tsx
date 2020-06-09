/**
 * storybook theme 속성 preview로 보여주기 위한 컴포넌트
 */

import React from "react";
import { ColorSet } from "../../utils/theme";

export const Colors = () => {
  const displayPrimary = [
    { label: "1000", value: ColorSet.Primary_1000 },
    { label: "900", value: ColorSet.Primary_900 },
    { label: "800", value: ColorSet.Primary_800 },
    { label: "500 - Accent", value: ColorSet.Primary_500 },
    { label: "100", value: ColorSet.Primary_100 },
    { label: "50", value: ColorSet.Primary_50 }
  ];
  const displayError = [
    { label: "Dark", value: ColorSet.Error_Dark },
    { label: "Base", value: ColorSet.Error_Base },
    { label: "Light", value: ColorSet.Error_Light }
  ];
  const displayWarning = [
    { label: "Dark", value: ColorSet.Warning_Dark },
    { label: "Base", value: ColorSet.Warning_Base },
    { label: "Light", value: ColorSet.Warning_Light }
  ];
  const displayGray = [
    { label: "900 (default)", value: ColorSet.Gray_900 },
    { label: "600 (sub)", value: ColorSet.Gray_600 },
    { label: "300 (placeholder)", value: ColorSet.Gray_300 },
    { label: "000 (white)", value: ColorSet.Gray_000 }
  ];
  const displayBgColor = [
    { label: "Dark", value: ColorSet.Background_Dark },
    { label: "Base", value: ColorSet.Background_Base },
    { label: "Light", value: ColorSet.Background_Light }
  ];

  const boxStyle = { width: "30%", marginBottom: "32px" };
  const itemStyle = bgColor => {
    return { width: "100%", textAlign: "center", backgroundColor: bgColor };
  };
  const textStyle = padding => {
    return {
      color: "#fff",
      mixBlendMode: "difference",
      padding: padding
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }}
    >
      <div style={boxStyle}>
        <h5 style={{ marginBottom: "12px" }}>Primary</h5>
        {displayPrimary.map((primary, index) => (
          <div style={itemStyle(primary.value) as any} key={index}>
            <p style={textStyle("22px") as any}>{primary.label}</p>
          </div>
        ))}
      </div>

      <div style={boxStyle}>
        <h5 style={{ marginBottom: "12px" }}>Error</h5>
        {displayError.map((error, index) => (
          <div style={itemStyle(error.value) as any} key={index}>
            <p style={textStyle("52px 0") as any}>{error.label}</p>
          </div>
        ))}
      </div>

      <div style={boxStyle}>
        <h5 style={{ marginBottom: "12px" }}>Warning</h5>
        {displayWarning.map((warning, index) => (
          <div style={itemStyle(warning.value) as any} key={index}>
            <p style={textStyle("52px 0") as any}>{warning.label}</p>
          </div>
        ))}
      </div>

      <div style={boxStyle}>
        <h5 style={{ marginBottom: "12px" }}>Gray</h5>
        {displayGray.map((gray, index) => (
          <div style={itemStyle(gray.value) as any} key={index}>
            <p style={textStyle("22px 0") as any}>{gray.label}</p>
          </div>
        ))}
      </div>

      <div style={boxStyle}>
        <h5 style={{ marginBottom: "12px" }}>Background</h5>
        {displayBgColor.map((bgColor, index) => (
          <div style={itemStyle(bgColor.value) as any} key={index}>
            <p style={textStyle("22px 0") as any}>{bgColor.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
