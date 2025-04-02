import './../styles/nav.css'

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
        Snowquest.io 
        </a>
        <ul>
            <li>
               <a href="/about">About us </a>
            </li>
            <li>
               <a href="/solutions">Our Solutions </a>
            </li>
           
        </ul>
    </nav>
}