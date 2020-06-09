import CSS from "csstype";
import React from "react";

import MaterialGrid from "@material-ui/core/Grid";

import { IGridProps } from "./GridType";
import { clearClassName } from "../../utils/checker";

/**
 * Grid Component 입니다.
 *
 * Grid는 한 라인당 12로 나눌 수 있으며 12를 초과하면 UI는 다음 라인에 배치됩니다.
 *
 * 기본 클래스로 `cr-gird`를 가지고 있으며, container 옵션 true인 경우 `cr-gird-container`, item 옵션 true인 경우 `cr-gird-item`을 추가로 갖는다
 */
export const Grid = (props: IGridProps) => {
  const className = `
    cr-grid
    ${props.item ? "cr-grid-item" : "cr-grid-container"}
    ${clearClassName(props.className)}
  `;

  const style: CSS.Properties = {
    display: props.item ? "inline-flex" : "flex",
    alignItems: props.alignItems,
    justifyContent: props.justify,
    flexDirection: props.direction,
    flexWrap: props.wrap,
    ...props.style
  };

  const m_props = {
    style: style,
    className: className,
    container: props.container,
    item: props.item,
    spacing: props.spacing,
    xl: props.xl,
    lg: props.lg,
    md: props.md,
    sm: props.sm,
    xs: props.xs
  };

  return <MaterialGrid {...m_props}>{props.children}</MaterialGrid>;
};

Grid.defaultProps = {
  wrap: "wrap"
};

export default Grid;
