import Navbar from "./Navbar";
import Feats from "./Feats";
import Footer from "./Footer";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroText,
} from "./Home.styles";

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Welcome to Quizzz!</HeroTitleText>
            </HeroTitle>
            <HeroText>
              You can use Quizzz to prepare you for a tech interview.
            </HeroText>
            {/* <HeroBtn to="/order-now">
              <Button primary big bigFont bigRadius>
                Start a Quizzz
              </Button>
            </HeroBtn> */}
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
      <Feats />
      <Footer />
    </div>
  );
};

export default Home;
