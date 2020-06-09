import CSS from "csstype";
import React, { useState, Fragment } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import MaterialCarousel from "@material-ui/core/MobileStepper";

import { ICarouselProps } from "./CarouselType";
import { clearClassName } from "../../utils/checker";
import Button from "../Inputs/Button";

import "./Carousel.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/**
 * Carousel Component 입니다.
 *
 * 기본 클래스로 `cr-carousel`를 가지고 있습니다.
 */
export const Carousel = (props: ICarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = props.contents.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const className = `
    cr-carousel
    ${clearClassName(props.className)}
  `;
  const style: CSS.Properties = {
    maxWidth: props.maxWidth ? `${props.maxWidth}px` : "100%",
    flexGrow: 1,
    ...props.style
  };

  const m_props = {
    style: style,
    className: className
  };

  return (
    <div {...m_props}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.contents.map((step, index) => (
          <Fragment key={index}>{step}</Fragment>
        ))}
      </AutoPlaySwipeableViews>
      <MaterialCarousel
        className="control-btn"
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            className="next-btn"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            variant="text"
          >
            Next
            {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        }
        backButton={
          <Button
            className="back-btn"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            variant="text"
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Carousel;
