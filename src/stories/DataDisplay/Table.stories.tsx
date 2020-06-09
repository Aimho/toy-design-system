import "../../assets/reset.css";

import React from "react";

import Table from "../../components/DataDisplay/Table";
import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";
import { ColorSet } from "../../utils/theme";

import { TDataSource, TColumn } from "../../components/DataDisplay/TableType";

export default {
  title: "DataDisplay|Table",
  component: Table
};

export const StroyBasic: React.FC = () => {
  const columns: TColumn[] = [
    {
      title: "Memo",
      dataIndex: "memo"
    },
    {
      title: "Action",
      dataIndex: "action"
    }
  ];

  const dataSource: TDataSource[] = [
    {
      key: "1",
      memo: "첫번째 메모입니다.",
      action: <Button variant="text">action</Button>
    },
    {
      key: "2",
      memo: "두번째 메모입니다.",
      action: <Button variant="text">action</Button>
    }
  ];

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Table
      </Typography>

      <Table columns={columns} dataSource={dataSource} />

      <Typography
        variant="body1"
        style={{
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        clickable
      </Typography>
      <Table
        columns={columns}
        dataSource={dataSource}
        onClickRow={key => console.log(key)}
      />
    </section>
  );
};
