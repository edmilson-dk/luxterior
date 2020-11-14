import { BsSearch } from 'react-icons/bs';
import { RiMenu4Line } from 'react-icons/ri';

import { Container } from '../../../Styles/container';

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuList,
  HeaderActions,
} from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <HeaderLogo>
            <h1>Luxterior</h1>
          </HeaderLogo>
          <HeaderMenu>
            <HeaderMenuList>
              <li><a href="https://github.com/DKSecurity99" >Home</a></li>
              <li><a href="https://github.com/DKSecurity99" >About</a></li>
              <li><a href="https://github.com/DKSecurity99" >Features</a></li>
              <li><a href="https://github.com/DKSecurity99" >Contact</a></li>
            </HeaderMenuList>
          </HeaderMenu>
          <HeaderActions>
            <span>
              <BsSearch size="2.5rem" color="#242424"/>
            </span>
            <span>
              <RiMenu4Line size="2.5rem" color="#242424"/>
            </span>
          </HeaderActions>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
