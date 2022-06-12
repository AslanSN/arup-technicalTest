import styled from "styled-components";
import { Tokens } from "../../../Tokens";

// interface

export const FilterLabel = styled.label`
  background: transparent;
  text-decoration: none;
  font-weight: ${props => props.weight};
	color: ${props => props.color}
`;
