import { TBaseComponent } from "../../utils/types";

export interface IRadioItemProps extends TCommonProps, TBaseComponent {
  /** Radio btn option */
  option: TRadioOption;
}

export interface IRadioGroupProps extends TCommonProps, TBaseComponent {
  /** Radio btn options */
  options: TRadioOption[];
  /** the  orientation */
  orientation?: "vertical" | "horizontal";
}

/**
 * RadioItem && Radio 모두에게 해당되는 type
 */
type TCommonProps = {
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
  /** Name attribute of the input element */
  name?: string;
  /** The value of the component */
  value?: string;
  /** Btn 클릭 시 호출되는 함수 */
  onChange: (value: string) => void;
  /** Radio btn type */
  type?: "text" | "button" | "card";
  /** hover color set primary */
  hoverHighlight?: boolean;
};

export type TRadioOption = {
  /** The value of the btn */
  value: string;
  /** The label of the btn */
  label: string | React.ReactNode;
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
};
