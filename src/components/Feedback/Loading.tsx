import React from "react";
import MaterialBackdrop from "@material-ui/core/Backdrop";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { ILoadingProps } from "./LoadingType";
import { ColorSet, ZIndex } from "../../utils/theme";

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: ZIndex.modal + 1,
    color: ColorSet.Gray_000
  },
  progress: {
    color: ColorSet.Primary_500
  }
}));

/**
 * Loading Component 입니다.
 */
export const Loading = (props: ILoadingProps) => {
  const classes = useStyles();

  return (
    <MaterialBackdrop className={classes.backdrop} open={props.active}>
      <MaterialCircularProgress
        variant="indeterminate"
        className={classes.progress}
      />
    </MaterialBackdrop>
  );
};

Loading.defaultProps = {
  active: false
} as ILoadingProps;

export default Loading;
