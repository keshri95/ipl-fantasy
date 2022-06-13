import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrap>
      <Header>
        <nav>
          <ul>
            <a href="#">
              <img src="/images/ipl-logo.png" alt="logo" />
            </a>
            <li>
              <a href="#">MATCHES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">STATS</a>
            </li>
            <li>
              <a href="#">POINTS TABLE</a>
            </li>
            <li>
              <a href="#">FANTASY</a>
            </li>
            <li>
              <a href="#">TEAMS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">MORE</a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/fan-poll.svg" alt="poll" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/choice.svg" alt="choice" />
              </a>
            </li>
          </ul>
        </nav>
      </Header>
      {/* <CarouselSection>
        <div>
            <p>IPL Fantasy</p>
            <img src="/images/ipl-logo" alt="logo" />
        </div>
      </CarouselSection> */}
    </Wrap>
  );
};

export default Navbar;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    92.04deg,
    #18184a 24.18%,
    #19398a 50.95%,
    #18184a 110.32%
  );
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }
  img {
    // width: 50px;
    // height: 50px;
    width: 100%;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    // font-size: 18px;
  }
`;

const CarouselSection = styled.div`
//   background-image: url("/images/blogInrBg.png");
  background: linear-gradient(
    92.04deg,
    #18184a 24.18%,
    #19398a 50.95%,
    #18184a 110.32%
  );
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
`;

const Wrap = styled.div`
    border: 1px solid red;
`;
