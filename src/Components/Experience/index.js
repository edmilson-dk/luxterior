import { FiArrowRight } from 'react-icons/fi';

import BoxNumber from './BoxNumber/';
import { Container } from '../../Styles/container';

import {
  ExperienceWrapper,
  ExperienceContainer,
  ExperienceImage,
  ExperienceContent,
  ExperienceContentTitle,
  ExperienceContentItems,
  ExperienceContentText,
  ExperienceContentButton,
  ExperienceContentWrapper,
} from './styles';

function Experience({ image, title, text, children }) {
  return (
    <ExperienceWrapper>
      <Container>
        <ExperienceContainer>
          <ExperienceImage>
            <img src={image} alt="Luxterior"/>
          </ExperienceImage>
          <ExperienceContent>
            <ExperienceContentTitle>{ title }</ExperienceContentTitle>
            <ExperienceContentItems>
              <ExperienceContentText>{ text }</ExperienceContentText>
              <ExperienceContentWrapper>
                { children }
              </ExperienceContentWrapper>
            </ExperienceContentItems>
            <ExperienceContentButton>
              Learn More
              <span>
                <FiArrowRight size="4rem" color="244d4d"/>
              </span>
            </ExperienceContentButton>
          </ExperienceContent>
        </ExperienceContainer>
      </Container>
    </ExperienceWrapper>
  );
}

export { BoxNumber, Experience };
