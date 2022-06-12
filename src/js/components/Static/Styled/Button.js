import styled from "styled-components";
import { Tokens } from "../../../Tokens";

export const Button = styled.button`
  background: transparent;
	text-decoration: none;
	font-weight: ${props.weight};
	color: ${props.color};
`;
