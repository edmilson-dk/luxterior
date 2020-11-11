import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteLight};

  input {
    width: 100%;
    padding: 1.2rem 1rem;
    background: ${({ theme }) => theme.colors.whiteLight};
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
    color: ${({ theme }) => theme.colors.gray};

    &:placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
