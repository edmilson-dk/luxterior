import { Children, useState } from 'react';
import BoxCustomer from './BoxCustomer/';
import { Container } from '../../Styles/container';

import {
  CustomersWrapper,
  CustomersContainer,
  CustomersHeader,
  CustomersTitle,
  CustomersContent,
} from './styles';

function Customers({ title, children }) {
  return (
    <CustomersWrapper>
      <Container>
        <CustomersContainer>
          <CustomersHeader>
            <CustomersTitle>
              { title}
            </CustomersTitle>

          </CustomersHeader>
          
          <CustomersContent>
              { children }
          </CustomersContent>
        </CustomersContainer>
      </Container>
    </CustomersWrapper>
  );
}

export { BoxCustomer, Customers };
