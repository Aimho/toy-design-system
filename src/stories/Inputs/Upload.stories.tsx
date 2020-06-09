import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Upload from "../../components/Inputs/Upload";
import UploadGuide from "../../components/Inputs/UploadGuide";
import Container from "../../components/Layout/Container";

export default {
  title: "Inputs|Upload", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Upload // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Upload
      </Typography>

      <div
        id="thisDropzone"
        style={{
          width: "100%",
          height: 200,
          border: "solid 1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "24px"
        }}
      >
        <Container
          maxWidth={{ xl: 320 }}
          disableGutters
          style={{ textAlign: "center" }}
        >
          <Upload
            dropZoneId="thisDropzone"
            label="파일 추가"
            onChange={files => console.log(files)}
            accept={[".png", ".step"]}
            style={{ marginBottom: "40px" }}
          />

          <UploadGuide
            dataSource={[
              {
                title: "3D 도면 파일",
                detail: "STP, STEP, IGS, IGES, STL, OBJ"
              }
            ]}
            description={
              <Typography variant="caption">
                한 파일당 최대 100MB까지 업로드할 수 있습니다
              </Typography>
            }
            textAlign="center"
          />
        </Container>
      </div>
    </section>
  );
};
