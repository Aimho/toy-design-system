import React from "react";
import MaterialSwitch from "@material-ui/core/Switch";
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";

import { ISwitchProps } from "./SwitchType";
import { clearClassName } from "../../utils/checker";

import "./Switch.scss";

/**
 * Switch Component 입니다.
 *
 * 기본 클래스로 `cr-switch`를 가지고 있습니다.
 */
export const Switch = (props: ISwitchProps) => {
  const className = `
    cr-switch
    checked-${props.checked}
    ${clearClassName(props.className)}
  `;

  const control = <MaterialSwitch disableRipple disabled={props.disabled} />;

  const m_props = {
    style: props.style,
    className: className,
    control: control,
    checked: props.checked,
    disabled: props.disabled,
    name: props.name,
    label: props.label
  };

  return (
    <MaterialFormControlLabel
      {...m_props}
      onChange={(__, checked) => props.onChange(checked)}
    />
  );
};

Switch.defaultProps = {} as ISwitchProps;

export default Switch;
