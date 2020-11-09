import styled from 'styled-components';

export const BenefitsWrapper = styled.section`
  width: 100%;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.whiteDark};
`;

export const BenefitsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;

  margin-top: 4rem;
`;

export const BenefitsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  max-width: 55%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    width: 18rem;
    height: 0.3rem;
    margin-right: 3rem;
    display: block;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

