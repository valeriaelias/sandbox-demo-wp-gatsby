import React from 'react';
import * as styles from './header.module.scss';
import Container from './Container';
import Nav from './Nav';

const Header = ({ children }) => (
  <header className={styles.header}>
    <Container>
      <Nav />
    </Container>
  </header>
);

export default Header;
