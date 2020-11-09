import {
  BoxNumberWrapper,
  BoxNumberLabel,
  BoxNumberText,
  BoxNumberItem,
} from './styles';

function BoxNumber({ number, text}) {
  return (
    <BoxNumberWrapper>
      <BoxNumberItem>
        <BoxNumberLabel>{ number }</BoxNumberLabel>
      </BoxNumberItem>  
      <BoxNumberItem>
        <BoxNumberText>{ text }</BoxNumberText>
      </BoxNumberItem>
    </BoxNumberWrapper>
  );
}

export default BoxNumber;
