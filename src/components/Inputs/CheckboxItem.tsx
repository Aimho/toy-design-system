import React from "react";
import MaterialCheckbox from "@material-ui/core/Checkbox";
import MaterialFormControlLabel from "@material-ui/core/FormControlLabel";

import { ICheckboxItemProps } from "./CheckboxType";
import { clearClassName } from "../../utils/checker";

import "./Checkbox.scss";

/**
 * Checkbox Component 입니다.
 *
 * 기본 클래스로 `cr-checkbox-item`를 가지고 있습니다.
 */
export const CheckboxItem = (props: ICheckboxItemProps) => {
  // props으로 value 들어오는 경우, checked 확인
  const checked = () => {
    const value = props.value;
    if (!value || value.indexOf(props.option.value) === -1) return false;
    return true;
  };

  const className = `
    cr-checkbox-item
    checked-${checked()}
    ${clearClassName(props.className)}
  `;

  const control = <MaterialCheckbox disableRipple disabled={props.disabled} />;

  const m_props = {
    style: props.style,
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
      onChange={(__, checked) => {
        if (checked) {
          return props.onChange(props.value.concat(props.option.value));
        }
        const val = props.value.map(v => v);
        val.splice(props.value.indexOf(props.option.value), 1);
        return props.onChange(val);
      }}
    />
  );
};

CheckboxItem.defaultProps = {} as ICheckboxItemProps;

export default CheckboxItem;
