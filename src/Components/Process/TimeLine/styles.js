import styled from 'styled-components';

export const TimeLineWrapper = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 6rem 1fr;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const TimeLineItem = styled.div`
  height: 100%;
  border-left: 2px dotted gray;
  position: relative;
  left: 2.5rem
`;

export const TimeLineItemCycler = styled.span`
  width: 5rem;
  height: 5rem;
  
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.whiteLight};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: -2.5rem;
  right: 0;
`;

export const TimeLineContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 2rem;
`;

export const TimeLineTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.desktop.md};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 600;
  text-align: left;
  
  margin-bottom: 1.5rem;
`;

export const TimeLineText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.sm};
  color: ${({ theme }) => theme.colors.darkLight};
  text-align: left;
`;
