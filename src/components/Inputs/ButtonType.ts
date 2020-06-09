import { TBaseComponent } from "../../utils/types";

export interface IButtonProps extends TCommonProps, TBaseComponent {
  /** The content of the button group */
  children: React.ReactNode;
  /** Element placed before the children */
  startIcon?: React.ReactNode;
  /** Element placed after the children */
  endIcon?: React.ReactNode;
  /** The URL to link to when the button is clicked */
  href?: string;
  /** the theme of the buttons */
  theme?: "primary" | "secondary" | "cancel" | "error" | "white";
  /** button 클릭 시 호출할 함수 */
  onClick?: (event?: any) => void;
  /** the size of the buttons */
  size?: "small" | "medium" | "large";
  /** the variant use */
  variant?: "outlined" | "contained" | "text";
}

export interface IButtonGroupProps extends TCommonProps, TBaseComponent {
  /** The content of the button group */
  children: React.ReactNode;
  /** The group orientation */
  orientation?: "vertical" | "horizontal";
  /** true 인 경우, 버튼 간격 제거 */
  disabledSpacing?: boolean;
}

/**
 * Btn && Btn Group 모두에게 해당되는 type
 */
type TCommonProps = {
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
  /** true 인 경우, full width of its container */
  fullWidth?: boolean;
};
