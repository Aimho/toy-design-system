import CSS from "csstype";
import React from "react";
import MaterialRadioGroup from "@material-ui/core/RadioGroup";

import CheckboxItem from "./CheckboxItem";
import { ICheckboxGroupProps } from "./CheckboxType";
import { clearClassName } from "../../utils/checker";

import "./Checkbox.scss";

/**
 * Checkbox Component 입니다.
 *
 * 기본 클래스로 `cr-checkbox-group`을 가지고 있으며
 *
 * orientation `vertical` 경우 `cr-checkbox-group-mb`, orientation `horizontal` 경우 `cr-checkbox-group-mr`을 가지고 있습니다.
 *
 * 간격을 조절 하고 싶은 경우 아래와 같이 스타일 속성을 수정하면 됩니다.
 *
 * - ```.cr-checkbox-group-mb > .cr-checkbox-item { margin-bottom: 8px; }```
 */
export const CheckboxGroup = (props: ICheckboxGroupProps) => {
  const isVertical = props.orientation === "vertical" ? true : false;

  const className = `
    cr-checkbox-group
    ${isVertical ? "cr-checkbox-mb" : "cr-checkbox-mr"}
    ${clearClassName(props.className)}
  `;

  const style: CSS.Properties = {
    display: isVertical ? "inline-flex" : "block",
    flexDirection: isVertical ? "column" : "row",
    ...props.style
  };

  const checkboxGroupProps = {
    className: className,
    style: style,
    name: props.name,
    value: props.value
  };

  return (
    <MaterialRadioGroup {...checkboxGroupProps} aria-label={props.name}>
      {props.options.length > 0 &&
        props.options.map((o, index) => (
          // RadioGroup에서 onChange 호출되므로 Radio에서는 아무동작하지 않도록 아래와 같이 처리함
          <CheckboxItem
            key={index}
            option={o}
            disabled={props.disabled || o.disabled}
            value={props.value}
            onChange={props.onChange}
          />
        ))}
    </MaterialRadioGroup>
  );
};

CheckboxGroup.defaultProps = {
  orientation: "horizontal"
} as ICheckboxGroupProps;

export default CheckboxGroup;
