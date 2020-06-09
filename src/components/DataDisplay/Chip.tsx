import React from "react";
import MaterialChip from "@material-ui/core/Chip";

import { IChipProps } from "./ChipType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

import "./Chip.scss";

/**
 * Chip Component 입니다.
 *
 * 기본 클래스로 `cr-chip`을 가지고 있습니다.
 */
export const Chip = (props: IChipProps) => {
  const m_label = () => {
    const labelStyle = {
      color: props.labelColor,
      display: "block",
      fontSize: "inherit"
    };

    return <span style={labelStyle}>{props.label}</span>;
  };

  const className = `
    cr-chip
    ${clearClassName(props.className)}
  `;
  const style = {
    backgroundColor:
      props.variant === "default" ? props.backgroundColor : "inheirt",
    borderColor: props.labelColor,
    borderRadius: `${props.borderRadius}px`,
    color: props.labelColor,
    ...props.style
  };

  const m_props = {
    style: style,
    className: className,
    label: m_label(),
    variant: props.variant
  };

  return <MaterialChip {...m_props} />;
};

Chip.defaultProps = {
  labelColor: ColorSet.Gray_900,
  backgroundColor: ColorSet.Background_Base,
  borderRadius: 30,
  variant: "default"
} as IChipProps;

export default Chip;
