import { TBaseComponent } from "../../utils/types";

export interface IDialogProps extends TBaseComponent {
  /** If true, the Dialog is open. */
  open: boolean;
  /** Dialog children, usually the included sub-components. */
  children: React.ReactNode;
  /** Dialog title */
  title?: string;
  /** Callback fired before the dialog close. */
  onClose: () => void;
  /** Dialog Footer Button Group */
  footer?: React.ReactNode;
}
