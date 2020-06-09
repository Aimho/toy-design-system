import { TBaseComponent } from "../../utils/types";

export type TUploadAlert = "overSize" | "notAcceptFile" | "unknown";

export interface IUploadProps extends TBaseComponent {
  /** Drop Zone이 있는 경우 id 입력 */
  dropZoneId?: string;
  /** true 인 경우, 비활성화 */
  disabled?: boolean;
  /** Btn label */
  label?: string;
  /** Btn 클릭 시 호출되는 함수 */
  onChange: (file: FileList) => void;
  /** onChange 시 문제가 발생하는 경우 호출되는 함수 */
  onAlert?: (type: TUploadAlert) => void;
  /** the size of the buttons */
  size?: "small" | "medium" | "large";
  /** the variant use */
  variant?: "outlined" | "contained" | "text";
  /** 허용하는 파일 유형 */
  accept?: string[];
  /** 허용하는 파일 크기(단위 MB) */
  maxSize?: number;
}

export type TUploadGuide = {
  title: string;
  detail: string;
};

export interface IUploadGuideProps extends TBaseComponent {
  /** Upload Guide 내용 */
  dataSource: TUploadGuide[];
  /** 추가 설명 */
  description?: React.ReactNode;
  /** The size of font */
  fontSize?: number;
  /** 텍스트 정렬 */
  textAlign?: "left" | "center" | "right";
}
