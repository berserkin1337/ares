import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
export default function NavBar() {
  return (
    <Navbar bg="light" className="nav-one">
        <div className="nav-two">
          <Link href="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </Link>
          <Link href="mailto:gaviral373@gmail.com">
            <Nav.Link href="mailto:gaviral373@gmail.com">Contact</Nav.Link>
          </Link>
          <Link href="https://www.github.com/berserkin1337/ares">
            <Nav.Link href="https://www.github.com/berserkin1337/ares">View source code</Nav.Link>
          </Link>
        </div>
        <div className="nav-three justify-content-end">
          <Link href="/">
            <Nav.Link href="/"><img src="favicon-32x32.png" alt="Ares" /></Nav.Link>
          </Link>
        </div>
    </Navbar>
  );
}