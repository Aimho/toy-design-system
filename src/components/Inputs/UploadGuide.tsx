import React, { Fragment } from "react";
import styled from "styled-components";

import { IUploadGuideProps } from "./UploadType";
import Grid from "../Layout/Grid";
import { ColorSet } from "../../utils/theme";

const StyledGridContainer = styled(Grid)`
  border: solid 1px ${ColorSet.Background_Base};
  border-bottom: 0px;
  border-radius: 4px;
  margin-bottom: 16px;
  text-align: left;
`;

const StyledGridItemLeft = styled(Grid)`
  padding: 4px 8px;
  color: ${ColorSet.Gray_600};
  border-right: solid 1px ${ColorSet.Background_Base};
  border-bottom: solid 1px ${ColorSet.Background_Base};
`;

const StyledGridItemRight = styled(Grid)`
  padding: 4px 8px;
  border-bottom: solid 1px ${ColorSet.Background_Base};
`;

/**
 * UploadGuide Component 입니다.
 */
const UploadGuide = (props: IUploadGuideProps) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, textAlign: "inherit" }}
    >
      <StyledGridContainer
        container
        style={{ fontSize: `${props.fontSize}px` }}
      >
        {props.dataSource.map((item, index) => (
          <Fragment key={index}>
            <StyledGridItemLeft item xs={4}>
              {item.title}
            </StyledGridItemLeft>
            <StyledGridItemRight item xs={8}>
              {item.detail}
            </StyledGridItemRight>
          </Fragment>
        ))}
      </StyledGridContainer>

      {props.description}
    </div>
  );
};

UploadGuide.defaultProps = {
  fontSize: 12
} as IUploadGuideProps;

export default UploadGuide;
