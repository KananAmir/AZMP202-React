import styled from "styled-components";

const Col = ({ children, size }) => {
  return <StyledCol size={size}>{children}</StyledCol>;
};

const StyledCol = styled.div`
  flex: ${({ size }) => (size ? `0 0 ${(size / 12) * 100}%` : "1")};
  padding: 1rem;
`;
export default Col;
