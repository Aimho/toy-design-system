import { TBaseComponent } from "../../utils/types";

export interface IStepperProps extends TBaseComponent {
  /** Current active step */
  activeStep?: number;
  /** Tab options */
  options: string[];
}
