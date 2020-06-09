import { TBaseComponent } from "../../utils/types";

/** Table columns type */
export type TColumn = {
  dataIndex: string;
  title: string | React.ReactNode;
  width?: number;
  align?: "left" | "center" | "right";
};

/** Table data type */
interface IDataSource {
  [props: string]: any;
}
export type TDataSource = IDataSource & {
  key: any;
};

export interface ITableProps extends TBaseComponent {
  /** Table columns */
  columns: Array<TColumn>;
  /** Table data  */
  dataSource: Array<TDataSource>;
  /** Click 시 dataSource의 key값을 반환함. */
  onClickRow?: (key: any) => void;
}
