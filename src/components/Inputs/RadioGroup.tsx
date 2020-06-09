import CSS from "csstype";
import React from "react";
import MaterialRadioGroup from "@material-ui/core/RadioGroup";

import RadioItem from "./RadioItem";
import { IRadioGroupProps } from "./RadioType";
import { clearClassName } from "../../utils/checker";

import "./Radio.scss";

/**
 * Radio Component 입니다.
 *
 * 기본 클래스로 `cr-radio-group`을 가지고 있으며
 *
 * orientation `vertical` 경우 `cr-radio-group-mb`, orientation `horizontal` 경우 `cr-radio-group-mr`을 가지고 있습니다.
 *
 * 간격을 조절 하고 싶은 경우 아래와 같이 스타일 속성을 수정하면 됩니다.
 *
 * - ```.cr-radio-group-mb > .cr-radio-item { margin-bottom: 8px; }```
 */
export const RadioGroup = (props: IRadioGroupProps) => {
  const isVertical = props.orientation === "vertical" ? true : false;

  const className = `
    cr-radio-group
    ${isVertical ? "cr-radio-mb" : "cr-radio-mr"}
    ${clearClassName(props.className)}
  `;

  const style: CSS.Properties = {
    display: isVertical ? "inline-flex" : "block",
    flexDirection: isVertical ? "column" : "row",
    ...props.style
  };

  const radioGroupProps = {
    className: className,
    style: style,
    name: props.name,
    value: props.value
  };

  return (
    <MaterialRadioGroup
      {...radioGroupProps}
      aria-label={props.name}
      onChange={(__, value) => {
        props.onChange(value);
      }}
    >
      {props.options.length > 0 &&
        props.options.map((o, index) => (
          <RadioItem
            key={index}
            option={o}
            type={props.type}
            hoverHighlight={props.hoverHighlight}
            disabled={props.disabled || o.disabled}
            value={props.value}
            // RadioGroup에서 onChange 호출되므로 Radio에서는 아무동작하지 않도록 아래와 같이 처리함
            onChange={__ => {}}
          />
        ))}
    </MaterialRadioGroup>
  );
};

RadioGroup.defaultProps = {
  hoverHighlight: true,
  orientation: "horizontal",
  type: "text"
} as IRadioGroupProps;

export default RadioGroup;
