import React from "react";
import MaterialRadio from "@material-ui/core/Radio";
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";

import { IRadioItemProps } from "./RadioType";
import { clearClassName } from "../../utils/checker";

import "./Radio.scss";

/**
 * Radio Component 입니다.
 *
 * 기본 클래스로 `cr-radio-item`를 가지고 있습니다.
 */
export const RadioItem = (props: IRadioItemProps) => {
  // props으로 value 들어오는 경우, checked 확인
  const checked = () => {
    const value = props.value;
    if (!value || value !== props.option.value) return false;
    return true;
  };

  const className = `
    cr-radio-item
    radio-type-${props.type}
    radio-checked-${checked()}
    radio-highlight-${props.hoverHighlight}
    ${clearClassName(props.className)}
  `;

  const cardPadding = () => {
    if (props.type === "text") return undefined;
    if (props.type === "button")
      return {
        paddingLeft: "46px"
      };
    return {
      paddingTop: "36px"
    };
  };

  const style = {
    ...cardPadding(),
    ...props.style
  };

  const control = <MaterialRadio disableRipple disabled={props.disabled} />;

  const m_props = {
    style: style,
    className: className,
    control: control,
    checked: checked(),
    disabled: props.disabled,
    name: props.name,
    label: props.option.label,
    value: props.option.value
  };

  return (
    <MaterialFormControlLabel
      {...m_props}
      onChange={(__, checked) => checked && props.onChange(props.option.value)}
    />
  );
};

RadioItem.defaultProps = {
  type: "text"
} as IRadioItemProps;

export default RadioItem;
