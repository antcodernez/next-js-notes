import Link from "next/link";
import styles from "./Header.module.sass";

export const Header = () => {
    return (
        <header className={styles.header}>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/store">
                <li>Drugs</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
};