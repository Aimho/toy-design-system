import React from "react";

import { Tabs, Tab, makeStyles } from "@material-ui/core";

import { ITabsProps } from "./TabsType";
import { clearClassName } from "../../utils/checker";
import { ColorSet } from "../../utils/theme";

import "./Tabs.scss";

const useStyles = makeStyles(() => ({
  root: {
    color: ColorSet.Gray_600,
    "&$selected": {
      color: ColorSet.Primary_500
    }
  },
  tab: {
    borderBottom: `solid 2px ${ColorSet.Gray_600}`
  },
  indicator: {
    backgroundColor: ColorSet.Primary_500
  }
}));

/**
 * Tabs Component 입니다.
 *
 * 기본 클래스로 `cr-tabs`를 가지고 있습니다.
 */
export const Container = (props: ITabsProps) => {
  const classes = useStyles();

  const className = `
    cr-tabs
    ${clearClassName(props.className)}
  `;

  const m_props = {
    style: props.style,
    className: className
  };

  return (
    <Tabs
      {...m_props}
      classes={{
        root: classes.root,
        indicator: classes.indicator
      }}
      value={props.value}
      onChange={(e, val) => props.onChange(val)}
      textColor="inherit"
    >
      {props.options.map((o, index) => (
        <Tab
          className={classes.tab}
          color={ColorSet.Gray_600}
          key={index}
          label={o}
        />
      ))}
    </Tabs>
  );
};

Container.defaultProps = {
  value: 0
} as ITabsProps;

export default Container;
