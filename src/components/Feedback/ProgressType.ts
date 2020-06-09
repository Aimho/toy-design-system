import { TBaseComponent } from "../../utils/types";

export interface IProgressProps extends TBaseComponent {
  /** The progress type */
  type: "circle" | "line";
}
