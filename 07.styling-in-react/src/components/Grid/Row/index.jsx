import styled from "styled-components";

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Row;
