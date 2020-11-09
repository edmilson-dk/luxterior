import {
  TimeLineWrapper,
  TimeLineItem,
  TimeLineItemCycler,
  TimeLineContent,
  TimeLineTitle,
  TimeLineText,
} from './styles';

function TimeLine({ number, title, text }) {
  return (
    <TimeLineWrapper>
      <TimeLineItem>
        <TimeLineItemCycler>{ number }</TimeLineItemCycler>
      </TimeLineItem>

      <TimeLineContent>
        <TimeLineTitle>{ title }</TimeLineTitle>
        <TimeLineText>{ text }</TimeLineText>
      </TimeLineContent>
    </TimeLineWrapper>
  );
}

export default TimeLine;
