import React, { useState, useRef } from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import * as styles from './nav.module.scss';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarMaxheight, setnavbarMaxheight] = useState('0');
  const menu = useRef();

  React.useEffect(() => {
    if (navbarOpen) {
      setnavbarMaxheight(`${menu.current.scrollHeight}px`);
    } else {
      setnavbarMaxheight('0px');
    }
  }, [navbarOpen]);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarBrand} to="/">
        {data.site.siteMetadata.title}
      </Link>

      <div className={styles.navbarToggler}>
        <input
          type="checkbox"
          id="navbar-toggler-bt"
          onChange={handleToggle}
          defaultChecked={navbarOpen}
        />
        <span />
        <span />
        <span />
      </div>

      <ul
        className={`${styles.navbarMenu} ${navbarOpen ? styles.expanded : ''}`}
        id="menu"
        ref={menu}
        style={{ maxHeight: navbarMaxheight }}
      >
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="#about">
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/blog/">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
