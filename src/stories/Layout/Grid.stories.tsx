import "../../assets/reset.css";

import React from "react";

import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";
import Grid from "../../components/Layout/Grid";

export default {
  title: "Layout|Grid", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Grid // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  return (
    <section style={{ padding: "40px" }}>
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Grid
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button fullWidth>xs=3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth>xs=3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth>xs=3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth>xs=3</Button>
        </Grid>
        <Grid item xs={8}>
          <Button fullWidth>xs=8</Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth>xs=4</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth>xs=6</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth>xs=6</Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth>xs=12</Button>
        </Grid>
      </Grid>
    </section>
  );
};
