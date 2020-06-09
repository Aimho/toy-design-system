import { ColorSet } from "../../utils/theme";
import { TBaseComponent } from "../../utils/types";

export interface IAppBarProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** The position of the component */
  position: "absolute" | "fixed" | "relative" | "static" | "sticky";
  /** The background color of the component */
  backgroundColor?: ColorSet | "inherit";
}
