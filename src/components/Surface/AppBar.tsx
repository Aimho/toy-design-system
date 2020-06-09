import React from "react";
import MaterialAppBar from "@material-ui/core/AppBar";

import { IAppBarProps } from "./AppBarType";
import { clearClassName } from "../../utils/checker";

/**
 * AppBar Component 입니다.
 *
 * 기본 클래스로 `cr-appbar`를 가지고 있습니다.
 */
export const AppBar = (props: IAppBarProps) => {
  const className = `
    cr-appbar
    ${clearClassName(props.className)}
  `;

  const style = {
    backgroundColor: props.backgroundColor,
    ...props.style
  };

  const m_props = {
    style: style,
    className: className,
    position: props.position
  };

  return <MaterialAppBar {...m_props}>{props.children}</MaterialAppBar>;
};

AppBar.defaultProps = {
  position: "relative"
} as IAppBarProps;

export default AppBar;
