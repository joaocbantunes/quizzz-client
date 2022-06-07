import Navbar from "./Navbar";
import Feats from "./Feats";
import { Button } from "../GlobalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Home.styles";

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Quizzz</HeroTitleText>
              <HeroTitleText>Here you can prepare your future!</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>...</HeroSubTitle>
            <HeroText>
              You can try different levels of Quizzz to prepare you for a tech
              interview.
            </HeroText>
            <HeroBtn to="/order-now">
              <Button primary big bigFont bigRadius>
                Start a Quizzz
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
      <Feats />
    </div>
  );
};

export default Home;
