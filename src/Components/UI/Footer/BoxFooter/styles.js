import styled, { css } from 'styled-components';

export const BoxFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BoxFooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.whiteLight};
  
  ${({ titleSize }) => titleSize ? css`
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  ` : css`
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  `}

  margin-bottom: 2rem;
  text-align: center;
`;

export const BoxFooterContent = styled.ul`
  list-style: none;
  width: 100%;

  li {
    display: inline-block;
    margin-bottom: 1rem;
  
    
    p {
      font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
      color: ${({ theme }) => theme.colors.darkLight};
      text-align: center;
      max-width: 100%;
    }
  }
`;
