import styled from 'styled-components';

export const BoxCustomerWrapper = styled.article`
  width: 100%;
  min-width: 48rem;
  margin: 2rem;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.primary};
`;

export const BoxCustomerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BoxCustomerHeader = styled.header`
  width: 100%;
`;

export const BoxCustomerQuote = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  text-align: left;
`;

export const BoxCustomerTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.whiteLight};
  font-weight: 500;
  text-align: left;

  margin: 3rem 0;
`;

export const BoxCustomerText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
  text-align: left;

  margin-bottom: 3rem;
`;

export const BoxCustomerFooter = styled.footer`
  width: 100%;
  max-width: 20rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BoxCustomerAvatar = styled.div`
  width: 6rem;
  height: 6rem;

  border-radius: 50%;
  background: #fff;
  margin-right: 2rem;
`;

export const BoxCustomerContent = styled.div`
  strong {
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
    color: ${({ theme }) => theme.colors.whiteLight};
    font-weight: 500;
  }

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.whiteLight};
  }
`;
