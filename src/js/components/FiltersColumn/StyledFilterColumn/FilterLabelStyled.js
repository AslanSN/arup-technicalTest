import styled from "styled-components";
/**
 * !Styled component
 * * AslanSN - 22-06-12
 * Filter - label
 */
export const FilterLabel = styled.label`
  background: transparent;
  text-decoration: none;
  font-weight: ${(props) => props.weight};
	color: ${(props) => props.color}
  cursor: pointer;
`;
