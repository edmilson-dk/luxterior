import { Container } from '../../Styles/container';

import BoxItem from './BoxItem/';

import {
  BenefitsWrapper,
  BenefitsTitle,
  BenefitsContainer,
} from './styles';

function Benefits({ title, children }) {
  return (
    <BenefitsWrapper>
      <Container>
        <BenefitsTitle>{ title }</BenefitsTitle>

        <BenefitsContainer>
          { children }
        </BenefitsContainer>
      </Container>
    </BenefitsWrapper>
  );
}

export { BoxItem, Benefits };
