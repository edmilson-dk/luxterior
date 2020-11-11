import {
  InputWrapper
} from './styles';

function Input({ placeholder, ...rest}) {
  return (
    <InputWrapper>
      <input placeholder={placeholder} {...rest}/>
    </InputWrapper>
  );
}

export default Input;
