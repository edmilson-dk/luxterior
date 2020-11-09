import styled from 'styled-components';

export const BoxNumberWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
`;

export const BoxNumberLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.desktop.lg};
  color: ${({ theme }) => theme.colors.dark};
`;

export const BoxNumberText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
`;

export const BoxNumberItem = styled.div`
  display: block;
  width: 100%;
`;
