import Link from "next/link";
import Popup from 'reactjs-popup';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="flex" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="navbar-logo-text">Union</h1>
        </div>
        <div className="navbar-link" data-aos="fade-left" data-aos-duration="2000">
            <div className="navbar-link-a"><Link href='/'>About</Link></div>
            <div className="navbar-link-a"><Link href='/project'>Project</Link></div>
            <div className="navbar-link-a">
              <Popup trigger={<button>Blog</button>} position="bottom center">
                  <h1 className="bg-blue-400 py-2 px-4 font-bold font-poppins">Coming Soon...</h1>
              </Popup>
              </div>
        </div>
    </div>
  )
}
