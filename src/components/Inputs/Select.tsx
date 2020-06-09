import React from "react";

import MaterialSelect from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

import { ISelectProps } from "./SelectType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

import "./Select.scss";

const Select = (props: ISelectProps) => {
  const className = `
    cr-select
    size-${props.size}
    ${clearClassName(props.className)}
  `;

  let style = {
    color: props.value === undefined ? ColorSet.Gray_600 : ColorSet.Gray_900,
    ...props.style
  };
  if (props.fullWidth) {
    style = {
      width: "100%",
      ...style
    };
  }

  const m_props = {
    className: className,
    style: style,
    multiple: props.multiple,
    onChange: (event: any) => props.onChange(event.target.value),
    value: props.value === undefined ? "" : props.value,
    disabled: props.disabled,
    displayEmpty: true
  };

  // component placeholder
  const cPlaceholder = props.placeholder && (
    <MenuItem value="" disabled>
      {props.placeholder}
    </MenuItem>
  );

  // component options
  const cSelectOptions =
    props.options &&
    props.options.length > 0 &&
    props.options.map((item, index) => (
      <MenuItem
        key={index}
        value={item.value}
        disabled={item.disabled}
        style={{ color: ColorSet.Gray_900 }}
      >
        {item.label}
      </MenuItem>
    ));

  return (
    <FormControl fullWidth>
      <MaterialSelect {...m_props} variant="outlined">
        {cPlaceholder}
        {cSelectOptions}
      </MaterialSelect>
    </FormControl>
  );
};

Select.defaultProps = {
  fullWidth: true
};

export default Select;
