import React from "react";
import { Info } from "@material-ui/icons";

import { ISnackBarProviderOptions, SnackBarVariant } from "./SnackBarType";
import { ColorSet } from "../../utils/theme";
import Typography from "../DataDisplay/Typography";

/**
 * notistack Provider Options,
 * material-ui snackbar 외부 라이브러리로 웹/앱 알림을 쉽게 표시할 수 있게 함.
 * @reference https://github.com/iamhosseindhv/notistack
 */
export const ProviderOption: ISnackBarProviderOptions = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "right"
  },
  autoHideDuration: 3000,
  maxSnack: 3
};

const snackBarStyle = (variant: SnackBarVariant) => {
  function color() {
    let bg = ColorSet.Primary_50;
    let text = ColorSet.Primary_500;
    if (variant === SnackBarVariant.Error) {
      bg = ColorSet.Error_Light;
      text = ColorSet.Error_Base;
    }

    return { bg, text };
  }

  const style = {
    boxShadow:
      "0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    display: "inline-flex",
    alignItems: "center",
    minWidth: "250px",
    width: "auto",
    padding: "15px",
    color: color().text,
    backgroundColor: color().bg
  };

  return style;
};

/**
 * Snackbar Content Info
 * enqueueSnackbar에 적용할 Snackbar Content
 * @param message 'string' or 줄바꿈 필요한 경우 '<Fragment></Fragment>'로 감싼 문구
 */
export const cInfo = (message: React.ReactNode) => (
  <div style={snackBarStyle(SnackBarVariant.Info)}>
    <Info style={{ marginRight: "10px" }} />
    <Typography variant="body2">{message}</Typography>
  </div>
);

/**
 * Snackbar Content Error
 * enqueueSnackbar에 적용할 Snackbar Content
 */
export const cError = (message: React.ReactNode) => (
  <div style={snackBarStyle(SnackBarVariant.Error)}>
    <Info style={{ marginRight: "10px" }} />
    <Typography variant="body2">{message}</Typography>
  </div>
);
