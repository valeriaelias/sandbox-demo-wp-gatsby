import React from 'react';
import * as styles from './main.module.scss';

const Main = ({ children }) => <main className={styles.main}>{children}</main>;

export default Main;
