import { TBaseComponent } from "../../utils/types";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface IExpansionProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** True 인 경우, open으로 시작 */
  defaultExpanded?: boolean;
  /** Expansion summary에 보여질 내용 */
  summary: string | React.ReactNode;
  /** Expansion summary에 보여질 내용 */
  detailStyleProps?: CSSProperties;
}
