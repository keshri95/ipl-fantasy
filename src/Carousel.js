import styled from "styled-components";
const Carousel = () => {
  return (
    <CarouselSection>
      <div>
        <p>IPL Fantasy</p>
        <img src="/images/blogInrBg.png" alt="carousel" />
      </div>
    </CarouselSection>
  );
};

export default Carousel;

const CarouselSection = styled.div`
  background: linear-gradient(
    92.04deg,
    #18184a 24.18%,
    #19398a 50.95%,
    #18184a 110.32%
  );
  background-repeat: no-repeat;
  background-size: cover;
`;
