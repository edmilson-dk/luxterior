import { ImQuotesLeft } from 'react-icons/im';

import {
  BoxCustomerWrapper,
  BoxCustomerContainer,
  BoxCustomerHeader,
  BoxCustomerQuote,
  BoxCustomerTitle,
  BoxCustomerText,
  BoxCustomerFooter,
  BoxCustomerAvatar,
  BoxCustomerContent,
} from './styles';

function BoxCustomer({ 
  title, 
  text, 
  name, 
  description, 
  avatar 
}) {
  return (
    <BoxCustomerWrapper>
      <BoxCustomerContainer>
        <BoxCustomerHeader>
          <BoxCustomerQuote>
            <ImQuotesLeft size="5rem" color="#F1A350"/>
          </BoxCustomerQuote>

          <BoxCustomerTitle>
            { title }
          </BoxCustomerTitle>
        </BoxCustomerHeader>
        
        <BoxCustomerText>
          { text }
        </BoxCustomerText>
        
        <BoxCustomerFooter>
          <BoxCustomerAvatar>
            { avatar }
          </BoxCustomerAvatar>
          
          <BoxCustomerContent>
            <strong>{ name }</strong>

            <p>{ description }</p>
          </BoxCustomerContent>
        </BoxCustomerFooter>
      </BoxCustomerContainer>
    </BoxCustomerWrapper>
  );
}

export default BoxCustomer;
