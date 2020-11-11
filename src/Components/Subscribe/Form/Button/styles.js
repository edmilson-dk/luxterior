import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;

  padding: 1.2rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.whiteLight};
`;
