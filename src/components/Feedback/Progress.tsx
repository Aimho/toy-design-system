import React from "react";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";
import MaterialLinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

import { IProgressProps } from "./ProgressType";
import { ColorSet } from "../../utils/theme";

const CircularProgress = withStyles({
  root: {
    color: ColorSet.Primary_500,
    margin: "auto"
  }
})(MaterialCircularProgress);

const LinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: ColorSet.Primary_50
  },
  barColorPrimary: {
    backgroundColor: ColorSet.Primary_500
  }
})(MaterialLinearProgress);

/**
 * Progress Component 입니다.
 *
 * 원형, 직선 타입을 가지고 있습니다.
 */
export const Progress = (props: IProgressProps) => {
  return props.type === "circle" ? (
    <CircularProgress variant="indeterminate" />
  ) : (
    <LinearProgress variant="indeterminate" />
  );
};

Progress.defaultProps = {
  type: "circle"
} as IProgressProps;

export default Progress;
