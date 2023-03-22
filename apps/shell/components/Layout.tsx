import styled from 'styled-components';
import Link from 'next/link';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Nav = styled.nav`
  padding: 5px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #eee;
`
export default function Layout({children}) {
  return (
    <Row>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/shows">Shows</Link>
        <Link href="/cart">Cart</Link>
      </Nav>
      <main>{children}</main>
    </Row>
  )
}
