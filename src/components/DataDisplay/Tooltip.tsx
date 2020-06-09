import React from "react";
import MaterialTooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

import { ColorSet } from "../../utils/theme";
import { clearClassName } from "../../utils/checker";
import { ITooltipProps } from "./TooltipType";

/**
 * Tooltip Component 입니다.
 *
 * 기본 클래스로 `cr-tooltip`을 가지고 있습니다.
 */
export const Tooltip = (props: ITooltipProps) => {
  function tooltipWidth() {
    if (!props.width) return "auto";
    if (isNaN(props.width)) return props.width - 28;
    return props.width;
  }

  const useStyles = makeStyles(() => ({
    arrow: {
      color: props.tooltipColor,
      borderColor: props.tooltipColor
    },
    tooltip: {
      backgroundColor: props.tooltipColor,
      borderColor: props.tooltipColor,
      width: tooltipWidth(),
      padding: "10px",
      borderRadius: "4px",
      fontSize: "14px",
      color: props.color,
      lineHeight: "20px",
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
    }
  }));

  const className = `
    cr-tooltip
    ${clearClassName(props.className)}
  `;

  const children = props.children;
  // ref 적용되어야 tooltip 보임
  const SomeContent = React.forwardRef((props, ref: any) => (
    <span {...props} ref={ref} style={{ cursor: "pointer" }}>
      {children}
    </span>
  ));

  const m_props = {
    arrow: false,
    placement: props.placement,
    title: props.title,
    className: className,
    classes: useStyles()
  };

  return (
    <MaterialTooltip {...m_props}>
      <SomeContent />
    </MaterialTooltip>
  );
};

Tooltip.defaultProps = {
  placement: "right-start",
  title: "Tooltip",
  tooltipColor: ColorSet.Gray_000,
  width: "auto",
  color: ColorSet.Gray_900
};

export default Tooltip;
