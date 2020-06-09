import { TBaseComponent } from "../../utils/types";

export interface ITabsProps extends TBaseComponent {
  /** The value of the currently selected Tab */
  value: number;
  /** Callback fired when the value changes. */
  onChange: (val: number) => void;
  /** Tab options */
  options: string[];
}
