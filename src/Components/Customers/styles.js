import styled from 'styled-components';

export const CustomersWrapper = styled.section`
  width: 100%;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.whiteDark};
`;

export const CustomersContainer = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CustomersHeader = styled.header`
  width: 100%;
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomersTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
`;

export const CustomersContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  overflow: auto;
`;
