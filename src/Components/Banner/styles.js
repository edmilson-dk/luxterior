import styled from 'styled-components';

export const BannerWrapper = styled.section`
  width: 100%;
  padding: 4rem 0 8rem 0;
  background: ${({ theme }) => theme.colors.whiteDark};
  position: relative;
`;

export const BannerCardFloat = styled.div`
  width: 100%;
  max-width: 38rem;
  height: 100%;
  max-height: 35rem;

  position: absolute;
  left: 0;
  top: calc(50% - 18rem);
  z-index: 99;

  padding: 4rem;
  background: ${({ theme }) => theme.colors.primary};
`;

export const BannerCardFloatTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  color: ${({ theme }) => theme.colors.whiteLight};
  text-align: left;
  margin-bottom: 3rem;
`;

export const BannerCardFloatText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.whiteInGreen};
  text-align: left;
  font-weight: 300;
`;

export const BannerImageWrapper = styled.article`
  width: calc(100% - 24rem);
  height: 64rem;
  max-height: 70rem;

  position: relative;
  left: 24rem;
  right: 0;
  z-index: 10;

  img {
  z-index: 10;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const BannerImageSquare = styled.div`
  width: 7rem;
  height: 7rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: transparent;

  position: absolute;
  left: -3.5rem;
  bottom: -3.5rem;
  z-index: -1;
`;

export const BannerImageButton = styled.div`
  width: 9rem;
  height: 9rem;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -2rem;
  bottom: -2rem;
  z-index: 999;
`;
