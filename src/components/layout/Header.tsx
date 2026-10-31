import styled from "styled-components";

const StyledHeader = styled.header`
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  color: aliceblue;
  font-size: 22px;
  font-family: monospace, Helvetica, sans-serif;
`;

function Header() {
  return (
    <StyledHeader>
      <P>Header</P>
    </StyledHeader>
  );
}

export default Header;
