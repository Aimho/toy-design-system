import React from "react";
import MaterialContainer from "@material-ui/core/Container";

import { IContainerProps } from "./ContainerType";
import { clearClassName } from "../../utils/checker";
import { Match } from "../../utils/mediaQuery";

/**
 * Container Component 입니다.
 *
 * 기본 클래스로 `cr-container`를 가지고 있습니다.
 */
export const Container = (props: IContainerProps) => {
  const maxWidth = isMatchMaxWidth(props.maxWidth);
  const className = `
    cr-container
    ${clearClassName(props.className)}
  `;

  const style = {
    backgroundColor: props.backgroundColor,
    maxWidth: maxWidth,
    ...props.style
  };

  const m_props = {
    style: style,
    className: className,
    component: props.component,
    disableGutters: props.disableGutters
  };

  return <MaterialContainer {...m_props}>{props.children}</MaterialContainer>;
};

Container.defaultProps = {
  backgroundColor: "inherit",
  component: "div",
  disableGutters: false,
  maxWidth: { xl: 1440 }
} as IContainerProps;

export default Container;

// Container max-width 설정하는 옵션 추가 (breakpoint 개별 설정 할 수있도록 함)
function isMatchMaxWidth(maxWidth: any) {
  let resultMaxWidth = "";

  const m_maxWidth = maxWidth;
  const breakPoint: any = {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1960px"
  };

  Object.keys(m_maxWidth).map(key => {
    if (Match(breakPoint[key])) {
      resultMaxWidth = m_maxWidth[key];
    }
    return key;
  });

  return resultMaxWidth;
}
