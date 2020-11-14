import { Container } from '../../../Styles/container';
import BoxFooter from './BoxFooter/';

import {
  FooterWrapper,
  FooterContainer,
} from './styles';

function Footer(){
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <BoxFooter 
            title="Luxterior"
            titleSize={true}
            content={[
              'We will help you to make an elegant and luxurious interior designed by a professional interior designer'
            ]}
          />
          
          <BoxFooter 
            title="About"
            titleSize={false}
            content={[
              'About us',
              'Features',
              'News',
              'Careers'
            ]}
          />
          
          <BoxFooter 
            title="Company"
            titleSize={false}
            content={[
              'Our Team',
              'Partrier With us',
              'FAQ',
              'Blog'
            ]}
          />
          
          <BoxFooter 
            title="Support"
            titleSize={false}
            content={[
              'Account',
              'Support center',
              'Feedback',
              'Contact us',
              'Accesbility',
            ]}
          />
          
          <BoxFooter 
            title="Get in Touch"
            titleSize={false}
            content={[
              "Question or feedback? We'd love to hear from you"
            ]}
          />
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
