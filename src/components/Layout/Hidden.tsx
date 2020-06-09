import React from "react";

import MaterialHidden from "@material-ui/core/Hidden";

import { IHiddenProps } from "./HiddenType";

/**
 * Hidden Component 입니다.
 *
 * 특정 viewport 에서 하위 Component를 숨기거나 노출해야 하는 경우에 사용하는 Component 입니다.
 */
export const Hidden = (props: IHiddenProps) => {
  const m_props = {
    only: props.only,
    xlDown: props.xlDown,
    xlUp: props.xlUp,
    lgDown: props.lgDown,
    lgUp: props.lgUp,
    mdDown: props.mdDown,
    mdUp: props.mdUp,
    smDown: props.smDown,
    smUp: props.smUp,
    xsDown: props.xsDown,
    xsUp: props.xsUp
  };

  return <MaterialHidden {...m_props}>{props.children}</MaterialHidden>;
};

export default Hidden;
