import Image from 'next/image';
import Link from 'next/link';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/logo.png"  // Ensure this path is correct
            alt="ScholarShare Logo" 
            width={285}
            height={35} 
            priority 
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/review">Review</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
    </nav>
  );
}

export default NavBar;
