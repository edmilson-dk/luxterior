import { Container } from '../../Styles/container';
import { FiArrowDown } from 'react-icons/fi';

import {
  BannerWrapper,
  BannerCardFloat,
  BannerCardFloatTitle,
  BannerCardFloatText,
  BannerImageWrapper,
  BannerImageSquare,
  BannerImageButton,
} from './styles';

function Banner({
  title,
  text,
  image
}) {
  return (
    <BannerWrapper>
      <Container>
        <BannerCardFloat>
          <BannerCardFloatTitle>{ title }</BannerCardFloatTitle>
          <BannerCardFloatText>{ text }</BannerCardFloatText>
        </BannerCardFloat>
        <BannerImageWrapper>
          <img src={image} alt="Luxterior"/>
          <BannerImageSquare></BannerImageSquare>
          <BannerImageButton>
            <FiArrowDown size="3rem" color="#fff"/>
          </BannerImageButton>
        </BannerImageWrapper>
      </Container>
    </BannerWrapper>
  );
}

export default Banner;
