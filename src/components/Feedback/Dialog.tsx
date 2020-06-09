import React from "react";
import MaterialDialog from "@material-ui/core/Dialog";
import { clearClassName } from "../../utils/checker";

import { IDialogProps } from "./DialogType";
import { Typography } from "../DataDisplay/Typography";
import { ZIndex } from "../../utils/theme";

/**
 * Dialog Component 입니다.
 *
 * 기본 클래스로 `cr-dialog`를 가지고 있습니다.
 *
 * 크게 title, content(children), footer(buttons)로 구성되어 있습니다.
 *
 */
const Dialog = (props: IDialogProps) => {
  const className = `
    cr-dialog
    ${clearClassName(props.className)}
  `;

  const m_props = {
    className,
    open: props.open,
    onClose: props.onClose,
    PaperProps: {
      square: true,
      style: { ...props.style, padding: "24px 28px" }
    }
  };

  const dialogTitle = props.title && (
    <Typography variant="h4" style={{ marginBottom: "12px" }}>
      {props.title}
    </Typography>
  );

  const dialogAction = props.footer && (
    <div style={{ marginTop: 40, textAlign: "right" }}>{props.footer}</div>
  );

  return (
    <MaterialDialog
      {...m_props}
      maxWidth={false}
      style={{ zIndex: ZIndex.modal }}
    >
      {dialogTitle}
      {props.children}
      {dialogAction}
    </MaterialDialog>
  );
};

Dialog.defaultProps = {
  open: false
};

export default Dialog;
