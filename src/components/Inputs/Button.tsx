import React from "react";

import MaterialButton from "@material-ui/core/Button";

import { IButtonProps } from "./ButtonType";
import { clearClassName } from "../../utils/checker";

import "./Button.scss";

/**
 * Button Component 입니다.
 *
 * 기본 클래스로 `cr-button`을 가지고 있습니다.
 */
const Button = (props: IButtonProps) => {
  const className = `
    cr-button
    ${clearClassName(props.theme)}
    ${clearClassName(props.className)}
  `;

  const target = props.href && "_blank";

  const m_props: any = {
    style: props.style,
    className: className,
    disabled: props.disabled,
    startIcon: props.startIcon,
    endIcon: props.endIcon,
    fullWidth: props.fullWidth,
    href: props.href,
    target: target,
    size: props.size,
    variant: props.variant,
    onClick: props.onClick,
    disableRipple: props.variant === "text"
  };

  return <MaterialButton {...m_props}>{props.children}</MaterialButton>;
};

Button.defaultProps = {
  theme: "primary",
  size: "medium",
  variant: "contained"
} as IButtonProps;

export default Button;
