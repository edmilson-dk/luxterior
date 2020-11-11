import styled from 'styled-components';

export const SubscribeWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteDark};
  padding: 4rem 0;
`;

export const SubscribeContainer = styled.article`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubscribeContent = styled.div`
  width: 100%;
`;

export const SubscribeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  
  margin-bottom: 3rem;
`;

export const SubscribeText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
  text-align: center;

  margin-bottom: 3rem;
`;

export const SubscribeForm = styled.div`
  width: 100%;
`;
