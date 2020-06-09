import { TBaseComponent } from "../../utils/types";

export interface ITextFieldProps extends TBaseComponent {
  /** If true, the input element will be disabled. */
  disabled?: boolean;
  /** The label content. */
  label?: React.ReactNode;
  /** If true, a textarea element will be rendered instead of an input. */
  multiline?: boolean;
  /** If true, the input will take up the full width of its container. */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: React.ReactNode;
  /** The short hint displayed in the input before the user enters a value. */
  placeholder?: string;
  /** The value of the input element, required for a controlled component. */
  value?: string | number;
  /** function(value: any) => void */
  onChange?: (value: any) => void;
  /** The content size */
  size?: "small" | "medium";
  /** The type of the input element */
  type?: "email" | "number" | "url" | "tel" | "password" | "text";
  /** If true, value is readonly */
  readonly?: boolean;
  /** Element placed after the children */
  endAdornment?: React.ReactNode;
}
