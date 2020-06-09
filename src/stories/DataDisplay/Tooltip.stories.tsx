import "../../assets/reset.css";

import React from "react";

import Tooltip from "../../components/DataDisplay/Tooltip";
import Typography from "../../components/DataDisplay/Typography";
import Grid from "../../components/Layout/Grid";
import Button from "../../components/Inputs/Button";

export default {
  title: "DataDisplay|Tooltip",
  component: Tooltip
};

export const StroyCanvas: React.FC = () => {
  const dummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const placements = ["bottom", "left", "right", "top"];

  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Tooltip
      </Typography>

      <Grid container spacing={5} justify="center">
        {placements.map((placement, index) => (
          <Grid item key={index} style={{ textAlign: "center" }}>
            <Tooltip placement={placement as any} title={dummyText} width={240}>
              <Button variant="text">{placement}</Button>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
