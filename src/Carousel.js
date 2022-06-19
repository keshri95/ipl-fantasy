import styled from "styled-components";
const Carousel = () => {
  return (
    <CarouselSection>
      <div className="col">
          <p className="display-4">IPL Fantasy</p>
          <img
            src="/images/ipl-logo.png"
            className="d-block w-100"
            alt="logo"
          />
        </div>
    </CarouselSection>
  );
};

export default Carousel;

const CarouselSection = styled.div`
  background: #19398a url(../images/vishal/blogInrBg.png) no-repeat left center;
  //   background-image: url("/images/blogInrBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    color: #fff;
  }
`;
