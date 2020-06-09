import { ColorSet } from "../../utils/theme";
import { TBaseComponent } from "../../utils/types";

export type TContainerMaxWidth = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
export interface IContainerProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** The component used for the root node. Either a string to use a DOM element or a component */
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>;
  /** The background color of the component */
  backgroundColor?: ColorSet | "inherit" | "transparent";
  /** true 인 경우 left, right padding 제거 */
  disableGutters?: boolean;
  /** Determine the max-width of the container
   * ```
    type TContainerMaxWidth = {
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };
   * ```
  */
  maxWidth?: TContainerMaxWidth;
}
