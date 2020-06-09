// reset css
import "./assets/reset.css";

// icons
import * as MuiIcons from "@material-ui/icons";

// utils functions
import * as checker from "./utils/checker";
import * as formatter from "./utils/formatter";
import * as lazyLoading from "./utils/lazyLoading";
import * as mediaQuery from "./utils/mediaQuery";
import * as theme from "./utils/theme";

// Actions components
import Popover from "./components/Actions/Popover";

// DataDisplay components
import Chip from "./components/DataDisplay/Chip";
import Table from "./components/DataDisplay/Table";
import Tooltip from "./components/DataDisplay/Tooltip";
import Typography from "./components/DataDisplay/Typography";

// Feedback
import Dialog from "./components/Feedback/Dialog";
import Loading from "./components/Feedback/Loading";
import Progress from "./components/Feedback/Progress";
import * as SnackBar from "./components/Feedback/SnackBar";

// Inputs
import Button from "./components/Inputs/Button";
import ButtonGroup from "./components/Inputs/ButtonGroup";
import Checkbox from "./components/Inputs/CheckboxGroup";
import Datepicker from "./components/Inputs/Datepicker";
import Radio from "./components/Inputs/RadioGroup";
import Select from "./components/Inputs/Select";
import Switch from "./components/Inputs/Switch";
import TextField from "./components/Inputs/TextField";
import Upload from "./components/Inputs/Upload";
import UploadGuide from "./components/Inputs/UploadGuide";

// Layout components
import Container from "./components/Layout/Container";
import Divider from "./components/Layout/Divider";
import Grid from "./components/Layout/Grid";
import Hidden from "./components/Layout/Hidden";

// Navigation components
import Carousel from "./components/Navigation/Carousel";
import Stepper from "./components/Navigation/Stepper";
import Tabs from "./components/Navigation/Tabs";

// Surface components
import AppBar from "./components/Surface/AppBar";
import Expansion from "./components/Surface/Expansion";

export {
  // icons
  MuiIcons,
  // utils
  checker,
  formatter,
  lazyLoading,
  mediaQuery,
  theme,
  // Actions
  Popover,
  // DataDisplay
  Chip,
  Table,
  Tooltip,
  Typography,
  // Feedback
  Dialog,
  Loading,
  Progress,
  SnackBar,
  // Inputs
  Button,
  ButtonGroup,
  Checkbox,
  Datepicker,
  Radio,
  Select,
  Switch,
  TextField,
  Upload,
  UploadGuide,
  // Layout
  Container,
  Divider,
  Grid,
  Hidden,
  // Navigation
  Carousel,
  Stepper,
  Tabs,
  // Surface
  AppBar,
  Expansion
};
