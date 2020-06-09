import { ColorSet } from "../../utils/theme";
import { TBaseComponent } from "../../utils/types";

export interface ITypographyProps extends TBaseComponent {
  /** The content of the component */
  children: React.ReactNode;
  /** Applies the theme typography styles */
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1" // h6 tag
    | "subtitle2" // h6 tag
    | "body1" // p tag
    | "body2" // p tag
    | "caption"; // span tag
  /** Set the text-align on the component */
  align?: "inherit" | "left" | "center" | "right";
  /** The color of the component */
  color?: ColorSet | "inherit";
  /** Controls the display type */
  display?: "initial" | "block" | "inline";
  /** Set the maxWidth of the component */
  maxWidth?: number;
  /** Set the fontUnit of the component */
  fontUnit?: "px" | "em";
  /** Set the fontWeight of the component */
  fontWeight?: 400 | 500 | 600;
}
