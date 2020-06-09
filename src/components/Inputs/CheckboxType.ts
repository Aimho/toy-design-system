import { TBaseComponent } from "../../utils/types";

export interface ICheckboxItemProps extends TCommonProps, TBaseComponent {
  /** Checkbox btn option */
  option: TCheckboxOption;
}

export interface ICheckboxGroupProps extends TCommonProps, TBaseComponent {
  /** Checkbox btn options */
  options: TCheckboxOption[];
  /** the  orientation */
  orientation?: "vertical" | "horizontal";
}

/**
 * CheckboxItem && Checkbox 모두에게 해당되는 type
 */
type TCommonProps = {
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
  /** Name attribute of the input element */
  name?: string;
  /** The value of the component */
  value: string[];
  /** Btn 클릭 시 호출되는 함수 */
  onChange: (value: string[]) => void;
};

export type TCheckboxOption = {
  /** The value of the btn */
  value: string;
  /** The label of the btn */
  label: string | React.ReactNode;
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
};
