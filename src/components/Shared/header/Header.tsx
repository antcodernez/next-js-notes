import Link from "next/link";

export const Header = () => {
    return (
        <header>
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