import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
export default Container;
