import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
  <ul>
    <li className="link"><Link href="/">Home</Link></li>
    <li className="link"><Link href="#About">About</Link></li>
    <li className="link"><Link href="#Skills">Skills</Link></li>
    <li className="link"><Link href="#Projects">Projects</Link></li>
    <li className="link"><Link href="#Contact">Contact</Link></li>
    
    
  </ul>
</nav>
        </>
    )
    
};
export default Navbar;