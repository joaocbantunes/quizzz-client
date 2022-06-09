import {
  FooterSection,
  FooterContainer,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
} from "./Footer.style";

function Footer() {
  return (
    <div>
      <FooterSection>
        <FooterContainer>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to=""> </FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to="https://github.com/joaocbantunes">
                  <img
                    src="https://res.cloudinary.com/joaocbantunes/image/upload/v1654773852/quizzz-project/github_ryklzj.png"
                    alt=""
                    srcset=""
                    width="30"
                  />{" "}
                  GitHub{" "}
                </FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink
                  to="https://github.com/joaocbantunes"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/joaocbantunes/image/upload/v1654774106/quizzz-project/linkedin_jqrgeb.png"
                    alt=""
                    srcset=""
                    width="33"
                  />{" "}
                  LinkedIn{" "}
                </FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to=""> </FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <FooterCopyRight to="#">
            João Antunes - WebDev 04.2022 - Ironhack Lisbon
          </FooterCopyRight>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
