import { TBaseComponent } from "../../utils/types";

export interface IDatepickerProps extends TBaseComponent {
  /** The placeholder */
  placeholder?: string;
  /** formatting된 선택된 날짜 */
  formattedValue?: string;
  /** 선택된 날짜 */
  value?: string;
  /** calender 에서 날짜 선택시 호출되는 func */
  onChange?: (value: string) => void;
  /** The content size */
  size?: "small" | "medium";
}
