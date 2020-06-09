import { TBaseComponent } from "../../utils/types";
import { ReactElement } from "react";
import { ColorSet } from "../../utils/theme";

export interface ITooltipProps extends TBaseComponent {
  /** Tooltip reference element. */
  children: ReactElement;
  /** 폰트 색상을 지정한다. */
  color?: ColorSet;
  /** Tooltip placement. */
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  /** Tooltip title. Zero-length titles string are never displayed. */
  title: Exclude<React.ReactNode, null | undefined>;
  /** 툴팁의 배경 색(arrow 포함)을 정한다. */
  tooltipColor?: ColorSet;
  /** 툴팁의 가로 크기를 지정한다. */
  width?: number;
}
