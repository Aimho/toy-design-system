import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles
} from "@material-ui/core";

import { ITableProps } from "./TableType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

const MuiTableHeadCell = withStyles({
  root: {
    padding: "5px",
    fontWeight: 400,
    fontSize: "12px",
    color: ColorSet.Gray_900
  }
})(TableCell);

const MuiTableBodyCell = withStyles({
  root: {
    padding: "16px 20px"
  }
})(TableCell);

/**
 * Table Component 입니다.
 *
 * 기본 클래스로 `cr-table`을 가지고 있습니다.
 */
const Container = (props: ITableProps) => {
  // hover 여부
  const isHover = props.onClickRow ? true : false;

  const className = `
    cr-table
    ${clearClassName(props.className)}
  `;

  // table header, body cell style props
  const cellProps = (item: any, key: number) => {
    const m_props = {
      key: key,
      width: item.width,
      align: item.align ? item.align : "center"
    };
    return m_props;
  };

  const tableHeader = (
    <TableHead
      style={{
        backgroundColor: "#F9FAFB",
        borderTop: `1px solid ${ColorSet.Background_Base}`,
        borderBottom: `1px solid ${ColorSet.Background_Base}`
      }}
    >
      <TableRow>
        {props.columns.map((item, index) => (
          <MuiTableHeadCell {...cellProps(item, index)}>
            {item.title}
          </MuiTableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const tableBody = (
    <TableBody
      style={{
        borderBottom: `1px solid ${ColorSet.Background_Base}`
      }}
    >
      {props.dataSource.map((item, index) => {
        const row = props.columns.map((header, index) => (
          <MuiTableBodyCell {...cellProps(header, index)}>
            {item[header.dataIndex]}
          </MuiTableBodyCell>
        ));

        // table row click
        const onClick = (event: any) => {
          event.preventDefault();
          if (props.onClickRow) return props.onClickRow(item.key);
        };

        return (
          <TableRow hover={isHover} onClick={onClick} key={index}>
            {row}
          </TableRow>
        );
      })}
    </TableBody>
  );

  return (
    <TableContainer>
      <Table className={className} style={props.style}>
        {tableHeader}
        {tableBody}
      </Table>
    </TableContainer>
  );
};

Container.defaultProps = {} as ITableProps;

export default Container;
