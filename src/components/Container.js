/*
 * Copyright(c) 2020
 *
 * All rights reserved.
 *
 *
 *
 * @author Indrajith C
 *
*/
import React from "react";
import PropTypes from "prop-types";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
import { ContainerWrapper } from "../elements";

/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

export const Container = (props) => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export const dummy = () => { };
