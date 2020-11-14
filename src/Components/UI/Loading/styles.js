import styled, { keyframes } from 'styled-components';

const animanteLeft = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWraper = styled.article`
  width: 100vw;
  height: 100vh;

  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingCircle = styled.div`
  width: 7rem;
  height: 7rem;
  border: 1rem solid #e5e5e5;
  border-top: 1rem solid ${({ theme }) => theme.colors.primary};
  border-bottom: 1rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  animation: ${animanteLeft} 1.2s linear infinite;
`;
