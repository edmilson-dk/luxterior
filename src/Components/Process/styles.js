import styled from 'styled-components';

export const ProcessWrapper = styled.section`
  width: 100%;
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.whiteDark};
`;

export const ProcessContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const ProcessContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
`;

export const ProcessTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  margin-bottom: 4rem;
`;

export const ProcessImage = styled.div`
  width: 100%;
  height: 60rem;
  max-height: 70rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
