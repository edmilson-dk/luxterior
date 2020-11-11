import {
  ButtonForm
} from './styles';

function Button({ label, ...props }) {
  return (
    <ButtonForm {...props}>
      { label }
    </ButtonForm>
  );
}

export default Button;
