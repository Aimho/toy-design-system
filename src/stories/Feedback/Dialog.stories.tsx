import "../../assets/reset.css";

import React, { useState } from "react";

import Typography from "../../components/DataDisplay/Typography";
import Dialog from "../../components/Feedback/Dialog";
import Button from "../../components/Inputs/Button";

export default {
  title: "Feedback|Dialog", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Dialog // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const buttonProps = {
    onClick: () => setIsOpen(false)
  };
  const cFooterDefault = (
    <Button {...buttonProps} theme="primary" variant="text">
      확인
    </Button>
  );

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Dialog
      </Typography>

      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open dialog
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Lorem Ipsum"
        footer={cFooterDefault}
      >
        <Typography variant="body2" maxWidth={460}>
          {dummyText}
        </Typography>
      </Dialog>
    </section>
  );
};
