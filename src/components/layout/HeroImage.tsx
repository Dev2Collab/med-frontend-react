import styled from "styled-components";

const ImgHero = styled.div`
  width: 50%;
  max-width: 50%;
`;
const Img = styled.img`
  width: 100%;
  max-width: 100%;
`;
// purely presentation component
function HeroImage() {
  return (
    <ImgHero>
      <Img src="/images/Modern clinic interior.png" />
    </ImgHero>
  );
}

export default HeroImage;
