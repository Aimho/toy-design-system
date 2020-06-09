import React, { Fragment, useState, useEffect } from "react";
import { CloudUpload } from "@material-ui/icons";

import { IUploadProps } from "./UploadType";
import { clearClassName } from "../../utils/checker";
import Button from "./Button";

/**
 * Upload Component 입니다.
 *
 * 기본 클래스로 `cr-upload`을 가지고 있습니다.
 */
const Upload = (props: IUploadProps) => {
  const randomId = Math.random().toString();
  const [input, setInput]: any = useState(undefined);
  const [dropzone, setDropzone]: any = useState(undefined);

  useEffect(() => {
    const elementInput = document.getElementById(randomId);
    if (!elementInput || input) return;
    setInput(elementInput);

    const elementDrop =
      props.dropZoneId && document.getElementById(props.dropZoneId);
    if (!elementDrop || dropzone) return;
    setDropzone(elementDrop);

    function drop(e: DragEvent) {
      e.stopPropagation();
      e.preventDefault();

      const dt = e.dataTransfer;
      if (dt && dt.files) {
        onChange(dt.files);
      }
    }

    const click = (e: Event) => {
      e.stopPropagation();
      elementInput.click();
    };

    elementDrop.addEventListener("dragenter", dragenter, false);
    elementDrop.addEventListener("dragover", dragover, false);
    elementDrop.addEventListener("drop", drop, false);
    elementDrop.addEventListener("click", click, false);

    return () => {
      if (elementDrop) {
        elementDrop.removeEventListener("dragenter", dragenter);
        elementDrop.removeEventListener("dragover", dragover);
        elementDrop.removeEventListener("drop", drop);
        elementDrop.removeEventListener("click", click);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const className = `
    cr-upload
    ${clearClassName(props.className)}
  `;

  const m_props = {
    style: props.style,
    className: className,
    startIcon: <CloudUpload />,
    size: props.size,
    variant: props.variant
  };

  const onChange = (files: FileList) => {
    const maxSize = props.maxSize! * 1024 * 1024;

    for (var i = 0; i < files.length; i++) {
      // get item
      const file = files.item(i);
      if (!file) return props.onAlert!("unknown");
      if (file.size > maxSize) return props.onAlert!("overSize");

      const fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
      if (props.accept && accept(props.accept).indexOf(fileExtension) === -1)
        return props.onAlert!("notAcceptFile");
    }
    props.onChange(files);
  };

  return (
    <Fragment>
      <input
        type="file"
        id={randomId}
        style={{ display: "none" }}
        onChange={e => e.target.files && onChange(e.target.files)}
        accept={props.accept && accept(props.accept)}
        multiple
      />
      <Button
        {...m_props}
        theme="primary"
        onClick={e => {
          e.stopPropagation();
          input.click();
        }}
      >
        {props.label}
      </Button>
    </Fragment>
  );
};

Upload.defaultProps = {
  size: "medium",
  variant: "contained",
  maxSize: 100,
  onAlert: type => console.error(type)
} as IUploadProps;

export default Upload;

function accept(prop: string[]) {
  const newAccept = [
    ...prop.map(accept => accept.toUpperCase()),
    ...prop.map(accept => accept.toLocaleLowerCase())
  ].join(",");
  return newAccept;
}

function dragenter(e: DragEvent) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e: DragEvent) {
  e.stopPropagation();
  e.preventDefault();
}
