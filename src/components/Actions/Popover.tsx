import React from "react";
import { Popover } from "@material-ui/core";

import { IPopoverProps } from "./PopoverType";

/**
 * Popover Component 입니다.
 */
export const Container = (props: IPopoverProps) => {
  const open = Boolean(props.anchorEl);
  const m_props = {
    open: open,
    anchorEl: props.anchorEl,
    anchorOrigin: props.anchorOrigin,
    transformOrigin: props.transformOrigin,
    onClose: props.onClose
  };
  return (
    <Popover {...m_props} PaperProps={{ style: props.style }}>
      {props.children}
    </Popover>
  );
};

Container.defaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
} as IPopoverProps;

export default Container;
