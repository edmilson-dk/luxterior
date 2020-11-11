import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.whiteLight};
  
  display: grid;
  grid-template-columns: 1fr 14rem;
  justify-content: center;
  align-items: center;
`;
