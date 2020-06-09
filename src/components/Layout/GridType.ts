import { TBaseComponent } from "../../utils/types";

export interface IGridProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** true 인 경우 flex & wrap 속성을 가진 container로 생성됨 */
  container?: boolean;
  /** true 인 경우 wrap 속성을 가진 items로 생성됨 */
  item?: boolean;
  /** Defines the align-items style property. */
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  /** Defines the flex-wrap style property. */
  wrap?: "wrap" | "nowrap";
  /** Defines the flex-direction style property. */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /** Defines the justify-content style property. */
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  /** Grid 사이 간격 (각 item에 'padding: spacing * 4px' 이 적용됨)  */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /** Screen xl(1960px) 이상에서는 해당 Grid로 적용 */
  xl?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Screen lg(1280px) 이상에서는 해당 Grid로 적용 */
  lg?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Screen md(960px) 이상에서는 해당 Grid로 적용 */
  md?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Screen sm(600px) 이상에서는 해당 Grid로 적용 */
  sm?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Screen xs(0px) 이상에서는 해당 Grid로 적용 */
  xs?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
