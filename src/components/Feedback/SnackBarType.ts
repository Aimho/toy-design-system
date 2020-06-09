import { SnackbarOrigin } from "@material-ui/core";

export interface ISnackBarProviderOptions {
  /** Snackbar 나타날 위치 설정 */
  anchorOrigin: SnackbarOrigin;
  /** Snackbar 등장 후 일정 시간 후 없어지게 할 것인지 */
  autoHideDuration: number;
  /** Snackbar 수 제한 */
  maxSnack: number;
}

/** Snackbar Variant */
export enum SnackBarVariant {
  Info = "info",
  Error = "error"
}
