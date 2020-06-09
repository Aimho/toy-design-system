import React from "react";

import MaterialButtonGroup from "@material-ui/core/ButtonGroup";

import { IButtonGroupProps } from "./ButtonType";
import { clearClassName } from "../../utils/checker";

/**
 * Button Group Component 입니다.
 *
 * 기본 클래스로 `cr-button-group`을 가지고 있으며
 *
 * orientation `vertical` 경우 `cr-button-group-mb`, orientation `horizontal` 경우 `cr-button-group-mr`을 가지고 있습니다.
 *
 * 간격을 조절 하고 싶은 경우 아래와 같이 스타일 속성을 수정하면 됩니다.
 *
 * - ```.cr-button-group-mb > .cr-button { margin-bottom: 8px; }```
 */
export const ButtonGroup = (props: IButtonGroupProps) => {
  const spacing = () => {
    if (props.disabledSpacing) return "";

    const isVertical = props.orientation === "vertical" ? true : false;
    if (isVertical) return "cr-button-group-mb";
    return "cr-button-group-mr";
  };

  const className = `
    cr-button-group
    ${clearClassName(spacing())}
    ${clearClassName(props.className)}
  `;

  const m_props: any = {
    style: props.style,
    className: className,
    disabled: props.disabled,
    fullWidth: props.fullWidth,
    orientation: props.orientation
  };

  return (
    <MaterialButtonGroup {...m_props}>{props.children}</MaterialButtonGroup>
  );
};

export default ButtonGroup;
