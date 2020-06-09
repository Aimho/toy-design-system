import { TBaseComponent } from "../../utils/types";

export interface ISwitchProps extends TBaseComponent {
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
  /** The label of the btn */
  label: string | React.ReactNode;
  /** Name attribute of the input element */
  name?: string;
  /** The value of the component */
  checked?: boolean;
  /** Btn 클릭 시 호출되는 함수 */
  onChange: (checked: boolean) => void;
}
