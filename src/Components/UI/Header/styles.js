import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1.2rem 0;
  background: ${({ theme }) => theme.colors.whiteLight};
`;

export const HeaderContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr minmax(6rem, 8rem);
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
`;

export const HeaderLogo = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.desktop.md};
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
  }
`; 

export const HeaderMenu = styled.nav`
  width: 100%;
`;

export const HeaderMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li a {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
    color: ${({ theme }) => theme.colors.dark};
    padding: 1rem 0;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  }
`;
