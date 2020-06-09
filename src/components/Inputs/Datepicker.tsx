import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarToday } from "@material-ui/icons";

import { IDatepickerProps } from "./DatepickerType";
import { clearClassName } from "../../utils/checker";
import TextField from "./TextField";
import Popover from "../Actions/Popover";

import "react-calendar/dist/Calendar.css";
import "./Datepicker.scss";
import { ColorSet } from "../../utils/theme";

/**
 * Datepicker Component 입니다.
 *
 * 기본 클래스로 `cr-datepicker`을 가지고 있습니다.
 */
const Datepicker = (props: IDatepickerProps) => {
  const [anchorEl, setAnchorEl]: any = useState(undefined);

  const className = `
    cr-datepicker
    ${clearClassName(props.className)}
  `;

  const m_props = {
    style: props.style,
    className: className,
    value: props.value ? new Date(props.value) : new Date()
  };

  return (
    <div
      style={{ width: "content-fit", height: "content-fit" }}
      onClick={e => setAnchorEl(e.currentTarget)}
    >
      <TextField
        placeholder={props.placeholder}
        value={props.formattedValue ? props.formattedValue : props.value}
        onChange={() => {}}
        size={props.size}
        endAdornment={<CalendarToday style={{ color: ColorSet.Primary_500 }} />}
      />

      <Popover
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(undefined)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <Calendar
          {...m_props}
          locale={"ko"}
          onChange={date => {
            if (props.onChange) {
              props.onChange(date.toString());
            }
            setAnchorEl(undefined);
          }}
        />
      </Popover>
    </div>
  );
};

Datepicker.defaultProps = {
  size: "medium",
  variant: "contained"
} as IDatepickerProps;

export default Datepicker;
