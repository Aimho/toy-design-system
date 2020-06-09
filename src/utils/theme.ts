/**
 * colors
 */
export enum ColorSet {
  Primary_50 = "#e3f2fd",
  Primary_100 = "#a7dfff",
  Primary_500 = "#2196f3",
  Primary_800 = "#1565c0",
  Primary_900 = "#033685",
  Primary_1000 = "#263651",
  Error_Light = "#fce7e7",
  Error_Base = "#e53935",
  Error_Dark = "#c62828",
  Warning_Light = "#fff5e5",
  Warning_Base = "#ffc107",
  Warning_Dark = "#ffa000",
  Gray_000 = "#ffffff",
  Gray_300 = "#c9d1d6",
  Gray_600 = "#939fa5",
  Gray_900 = "#323d45",
  Background_Light = "#f5f5f5",
  Background_Base = "#e5e5e5",
  Background_Dark = "#c2c2c2"
}

/**
 * set breakpoint
 * @reference https://material-ui.com/customization/breakpoints/
 */
export enum Breakpoint {
  xs = 0,
  sm = 600,
  md = 960,
  lg = 1280,
  xl = 1960
}

/**
 * set z-index
 * @reference https://material-ui.com/customization/z-index/
 */
export enum ZIndex {
  mobileStepper = 1000,
  speedDial = 1050,
  appBar = 1100,
  drawer = 1200,
  modal = 1300,
  snackbar = 1400,
  tooltip = 1500
}
