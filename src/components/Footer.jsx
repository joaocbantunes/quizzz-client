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
                  {" "}
                  GitHub{" "}
                </FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to="https://github.com/joaocbantunes">
                  {" "}
                  LinkedIn{" "}
                </FooterLink>
              </FooterLinks>
              <FooterLinks>
                <FooterLinkTitle></FooterLinkTitle>
                <FooterLink to=""> </FooterLink>
              </FooterLinks>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <FooterCopyRight to="">
            Designed and coded with 🖤 by João Antunes
          </FooterCopyRight>
        </FooterContainer>
      </FooterSection>
    </div>
  );
}

export default Footer;
