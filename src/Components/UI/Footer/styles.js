import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.primary};
`;

export const FooterContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: start;
  column-gap: 2rem;
`;
