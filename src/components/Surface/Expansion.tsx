import React, { useState } from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  withStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { IExpansionProps } from "./ExpansionType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

const MuiExpansionPanel = withStyles({
  root: {
    border: `1px solid ${ColorSet.Background_Base}`,
    boxShadow: "none",
    "&::before": {
      backgroundColor: "transparent"
    },
    "& + .cr-expansion": {
      borderTop: "0px"
    },
    "&.Mui-expanded": {
      margin: "0px"
    }
  }
})(ExpansionPanel);

const MuiExpansionPanelSummary = withStyles({
  root: {
    minHeight: 48,
    "&$expanded": {
      minHeight: 48
    }
  },
  expanded: {
    "&.MuiExpansionPanelSummary-content.Mui-expanded": {
      margin: "0px"
    }
  }
})(ExpansionPanelSummary);

const MuiExpansionPanelDetail = withStyles({
  root: {
    padding: "14px"
  }
})(ExpansionPanelDetails);

/**
 * Expansion Component 입니다.
 *
 * 기본 클래스로 `cr-expansion`를 가지고 있습니다.
 */
export const Container = (props: IExpansionProps) => {
  const [expanded, setExpanded] = useState(props.defaultExpanded);

  const className = `
    cr-expansion
    ${clearClassName(props.className)}
  `;

  const m_props = {
    style: props.style,
    className: className
  };

  return (
    <MuiExpansionPanel
      {...m_props}
      expanded={expanded}
      onChange={(___, expanded) => setExpanded(expanded)}
    >
      <MuiExpansionPanelSummary
        expandIcon={<ExpandMore style={{ color: ColorSet.Gray_600 }} />}
      >
        {props.summary}
      </MuiExpansionPanelSummary>
      <MuiExpansionPanelDetail style={props.detailStyleProps}>
        {props.children}
      </MuiExpansionPanelDetail>
    </MuiExpansionPanel>
  );
};

Container.defaultProps = {
  defaultExpanded: false
} as IExpansionProps;

export default Container;
