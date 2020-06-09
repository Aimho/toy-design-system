import React from "react";

import { TextField, InputAdornment } from "@material-ui/core";

import { ITextFieldProps } from "./TextFieldType";
import { clearClassName } from "../../utils/checker";

import "./TextField.scss";
import { ColorSet } from "../../utils/theme";

/**
 * TextField Component 입니다.
 *
 * 기본 클래스로 `cr-text-field`를 가지고 있습니다.
 */
const Container = (props: ITextFieldProps) => {
  const className = `
    cr-text-field
    size-${props.size}
    multi-${props.multiline}
    ${clearClassName(props.className)}
  `;

  let style = {
    ...props.style
  };
  if (props.fullWidth) {
    style = {
      ...style,
      width: "100%"
    };
  }

  const onChange = (value: string | number) => {
    if (props.readonly || !props.onChange) return null;

    if (props.type === "number" && value < 0) {
      return props.onChange(1);
    }
    return props.onChange(value);
  };

  const m_props = {
    className: className,
    style: style,
    disabled: props.disabled,
    multiline: props.multiline,
    onChange: (event: any) => onChange(event.target.value),
    placeholder: props.placeholder,
    value: props.value,
    helperText: props.helperText,
    type: props.type,
    label: props.label
  };

  const endAdornment = props.endAdornment && (
    <InputAdornment position="end">{props.endAdornment}</InputAdornment>
  );

  return (
    <TextField
      {...m_props}
      variant="outlined"
      InputProps={{
        endAdornment: endAdornment,
        style: {
          backgroundColor: props.readonly
            ? ColorSet.Background_Light
            : ColorSet.Gray_000
        }
      }}
    />
  );
};

Container.defaultProps = {
  multiline: false,
  fullWidth: true,
  size: "medium",
  type: "text",
  readonly: false
};

export default Container;
