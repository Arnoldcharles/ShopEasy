import '@/styles/globals.css';
import Link from 'next/link';
import './layout.css';

export const metadata = {
  title: 'Ecommerce Store',
  description: 'A beautiful modern ecommerce website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <Link href="/" className="logo">ShopEasy</Link>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
            <ul className="nav-links">
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">© {new Date().getFullYear()} ShopEasy</footer>
      </body>
    </html>
  );
}
