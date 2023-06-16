import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const StyleHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyleHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Cake Fit</Logo>
          <StyledNav>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>Productos</NavLink>
            <NavLink href={'/categories'}>Categorias</NavLink>
            <NavLink href={'/account'}>Cuenta</NavLink>
            <NavLink href={'/cart'}>Carrito ({cartProducts.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyleHeader>
  );
}
