import { Container } from '../../Styles/container';
import TimeLine from './TimeLine/';

import {
  ProcessWrapper,
  ProcessContainer,
  ProcessContent,
  ProcessTitle,
  ProcessImage,
} from './styles';

function Process({ image, title, children }) {
  return (
    <ProcessWrapper>
      <Container>
        <ProcessContainer>
          <ProcessContent>
            <ProcessTitle>{ title }</ProcessTitle>

            { children }
          </ProcessContent> 

          <ProcessImage>
            <img src={image} alt="Luxterior hero image"/>
          </ProcessImage>
        </ProcessContainer>
      </Container>
    </ProcessWrapper>
  );
}

export { TimeLine, Process };
