import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = ({ username }) => {
  const router = useRouter();

  const [login, setLogin] = useState('');

  useEffect(() => {
    // Update login state based on token and URL change
    if (localStorage.getItem('token')) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [router.asPath]); // Listen for URL changes

  const handleClick = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Personal Blogging App</h3>
      <div className={styles.child}>
        <p className={styles.username}>{username}</p>
        {login ? (
          <Link onClick={handleClick} className={styles.login} href={''}>
            Logout
          </Link>
        ) : (
          <Link onClick={handleClick} className={styles.login} href={'/login'}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
