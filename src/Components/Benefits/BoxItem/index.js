import {
  BoxItemWrapper,
  BoxItemIcon,
  BoxItemContent,
  BoxItemContentTitle,
  BoxItemContentText,
} from './styles';

function BoxItem({
  title,
  text,
  icon,
}) {
  return (
    <BoxItemWrapper>
      <BoxItemIcon>
        { icon }
      </BoxItemIcon>
      <BoxItemContent>
        <BoxItemContentTitle>{ title }</BoxItemContentTitle>
        <BoxItemContentText>{ text }</BoxItemContentText>
      </BoxItemContent>
    </BoxItemWrapper>
  );
}

export default BoxItem;
