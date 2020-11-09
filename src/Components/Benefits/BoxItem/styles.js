import styled from 'styled-components';

export const BoxItemWrapper = styled.article`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxItemIcon = styled.div`
  width: 100%;
  max-width: 6rem;
  margin-right: 2rem;
`;

export const BoxItemContent = styled.div`
  width: 100%;
`;

export const BoxItemContentTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const BoxItemContentText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
  text-align: left;
`;
