import Button from './Button/';
import Input from './Input/';

import { FormWrapper } from './styles';

function Form({ children, ...props }) {
  return (
    <FormWrapper>
      { children }
    </FormWrapper>
  );
}

export { Form, Button, Input };

