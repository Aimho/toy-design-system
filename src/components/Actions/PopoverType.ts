import { TBaseComponent } from "../../utils/types";

export interface IPopoverProps extends TBaseComponent {
  children: React.ReactNode;
  anchorEl: Element;
  onClose: () => void;
  anchorOrigin?: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
  transformOrigin?: {
    horizontal: "center" | "left" | "right" | number;
    vertical: "bottom" | "center" | "top" | number;
  };
}
