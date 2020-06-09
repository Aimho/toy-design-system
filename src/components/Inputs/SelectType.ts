import { TBaseComponent } from "../../utils/types";

export interface ISelectProps extends TBaseComponent {
  /** If true, width 100% */
  fullWidth?: boolean;
  /** If true, value must be an array and the menu will support multiple selections. */
  multiple?: boolean;
  /** The input value. */
  value?: any;
  /** function(value: any) => void */
  onChange: (value: any) => void;
  /** The content size */
  size?: "small" | "medium";
  /** The select options. */
  options: TSelectOption[];
  /** The placeholder. */
  placeholder?: string;
  /** If true, select disabled */
  disabled?: boolean;
}

export type TSelectOption = {
  /** The Select Menu value */
  value: any;
  /** The Select Menu Label */
  label: string | React.ReactNode;
  /** If true, Item disabled */
  disabled?: boolean;
};
