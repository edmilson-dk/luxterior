import {
  BoxFooterWrapper,
  BoxFooterTitle,
  BoxFooterContent,
} from './styles';

function BoxFooter({ title, titleSize, content }) {
  return (
    <BoxFooterWrapper>
      <BoxFooterTitle titleSize={titleSize}>{ title }</BoxFooterTitle>
      <BoxFooterContent>
        {
          content && content.map((item, index) => (
            <li key={index}>
              <p>{ item }</p>
            </li>
          ))
        }
      </BoxFooterContent>
    </BoxFooterWrapper>
  );
}

export default BoxFooter;
