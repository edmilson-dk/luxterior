import styled from 'styled-components';

export const ExperienceWrapper = styled.section`
  width: 100%;
  padding: 6rem 0;

  background: ${({ theme }) => theme.colors.whiteDark};
`;

export const ExperienceContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  column-gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const ExperienceImage = styled.div`
  width: 100%;
  height: 60rem;
  max-height: 70rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExperienceContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 0;
`;

export const ExperienceContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
`;

export const ExperienceContentItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 3rem 0;
`;

export const ExperienceContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ExperienceContentText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
  text-align: left;

  margin-bottom: 3rem;
`;

export const ExperienceContentButton = styled.button`
  width: 20rem;
  max-width: 22rem;
  height: 6rem;
  background: #fff;
  
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.primary};
  border: 0.3rem solid ${({ theme }) => theme.colors.primary};
    
  position: relative;

  span {
    position: absolute;
    top: 0.8rem;
    right: 0;
  }
`;
