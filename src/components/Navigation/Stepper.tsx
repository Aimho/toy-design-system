import React from "react";

import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";

import { IStepperProps } from "./StepperType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

const useStepperStyles = makeStyles(() => ({
  root: {
    padding: "26px 0px",
    "&.MuiStepper-root > .MuiStepConnector-root > .MuiStepConnector-line": {
      borderColor: ColorSet.Gray_600
    }
  }
}));

const useStepIconStyles = makeStyles(() => ({
  root: {
    color: ColorSet.Gray_600,
    "&.MuiStepIcon-active, &.MuiStepIcon-completed": {
      color: ColorSet.Primary_500
    }
  }
}));

const useStepLabelStyles = makeStyles(() => ({
  root: {
    color: ColorSet.Gray_600,
    "&.MuiStepIcon-active, &.MuiStepIcon-completed": {
      color: ColorSet.Primary_900,
      fontWeight: 600
    }
  }
}));

/**
 * Stepper Component 입니다.
 *
 * 기본 클래스로 `cr-stepper`를 가지고 있습니다.
 */
export const Container = (props: IStepperProps) => {
  const classesStepper = useStepperStyles();
  const classesIcon = useStepIconStyles();
  const classesLabel = useStepLabelStyles();

  const className = `
    cr-stepper
    ${clearClassName(props.className)}
  `;

  const m_props = {
    style: props.style,
    className: className
  };

  return (
    <Stepper
      {...m_props}
      activeStep={props.activeStep}
      classes={classesStepper}
    >
      {props.options.map((label, index) => (
        <Step key={index}>
          <StepLabel
            classes={classesLabel}
            StepIconProps={{ classes: classesIcon }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Container;
