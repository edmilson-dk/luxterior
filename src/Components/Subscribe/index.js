import {
  Form,
  Button,
  Input,
} from './Form/';

import {
  SubscribeWrapper,
  SubscribeContainer,
  SubscribeContent,
  SubscribeTitle,
  SubscribeText,
  SubscribeForm,
} from './styles';

function Subscribe({ title, text, children }) {
  return (
    <SubscribeWrapper>
      <SubscribeContainer>
        <SubscribeContent>
          <SubscribeTitle>{ title }</SubscribeTitle>
          <SubscribeText>{ text }</SubscribeText>
        </SubscribeContent>
        <SubscribeForm>
          { children }
        </SubscribeForm>
      </SubscribeContainer>
    </SubscribeWrapper>
  );
}

export { Subscribe, Form, Button, Input };
