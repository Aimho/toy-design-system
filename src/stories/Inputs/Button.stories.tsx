import "../../assets/reset.css";

import React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

import Typography from "../../components/DataDisplay/Typography";
import Button from "../../components/Inputs/Button";
import Grid from "../../components/Layout/Grid";
import { ColorSet } from "../../utils/theme";

export default {
  title: "Inputs|Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button // 어떤 컴포넌트를 문서화 할지 명시
};

export const StroyBasic = () => {
  const sizes = ["small", "medium", "large"];
  return (
    <section
      style={{
        padding: "40px",
        backgroundColor: ColorSet.Background_Dark
      }}
    >
      <Typography variant="h2" style={{ marginBottom: "48px" }}>
        Button
      </Typography>

      <Typography
        variant="body1"
        style={{
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        Theme
      </Typography>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="primary">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="primary" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="primary" variant="outlined">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="primary" variant="outlined" size="small" disabled>
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="secondary">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="secondary" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="white" variant="outlined">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="white" variant="outlined" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="cancel">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="cancel" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="error">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="error" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="error" variant="outlined">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="error" variant="outlined" disabled size="small">
            버튼
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10} alignItems="flex-end">
        {sizes.map((size, index) => (
          <Grid item key={index}>
            <Button size={size as any} theme="primary" variant="text">
              버튼
            </Button>
          </Grid>
        ))}
        <Grid item>
          <Button theme="primary" disabled size="small" variant="text">
            버튼
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        StartIcon And EndIcon
      </Typography>
      <Grid container spacing={10} alignItems="flex-end">
        <Grid item>
          <Button startIcon={<ChevronLeft />}>버튼</Button>
        </Grid>
        <Grid item>
          <Button endIcon={<ChevronRight />}>버튼</Button>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          color: ColorSet.Gray_900
        }}
      >
        FullWidth
      </Typography>
      <Button fullWidth>버튼</Button>
    </section>
  );
};
