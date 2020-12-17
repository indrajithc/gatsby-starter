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

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

import styled from "styled-components";

export const ContainerWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${(props) => props.theme.breakpoint.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap:  0 1rem;
  }

  @media ${(props) => props.theme.breakpoint.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`;

export const dummy = null;
