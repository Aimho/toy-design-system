import React from "react";
import MaterialFade from "@material-ui/core/Fade";
import MaterialGrow from "@material-ui/core/Grow";
import MaterialCollapse from "@material-ui/core/Collapse";

import { ITransitionProps } from "./TransitionType";

/**
 * Fade Component 입니다.
 */
export const Fade = (props: ITransitionProps) => {
  const m_props = {
    in: props.in,
    timeout: props.timeout
  };
  return <MaterialFade {...m_props}>{props.children}</MaterialFade>;
};

/**
 * Grow Component 입니다.
 */
export const Grow = (props: ITransitionProps) => {
  const m_props = {
    in: props.in,
    timeout: props.timeout
  };
  return <MaterialGrow {...m_props}>{props.children}</MaterialGrow>;
};

/**
 * Collapse Component 입니다.
 */
export const Collapse = (props: ITransitionProps) => {
  const m_props = {
    in: props.in,
    timeout: props.timeout
  };
  return <MaterialCollapse {...m_props}>{props.children}</MaterialCollapse>;
};
