import styled from "styled-components";
import Wrapper from "../components/layout/Wrapper";
import HeroImage from "../components/layout/HeroImage";
import HeroText from "../components/layout/HeroText";

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

function HomePage() {
  return (
    <Wrapper>
      <Group>
        <HeroImage />
        <HeroText />
      </Group>
    </Wrapper>
  );
}

export default HomePage;
