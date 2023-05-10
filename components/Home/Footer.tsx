import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  let Links = [
    { class: 'link', name: 'About', href: '/'},
    { class: 'link', name: 'Project', href: '/project'},
  ]
  return (
    <div className="h-[650px] lg:h-[600px] md bg-gradient-to-br from-footer to-[#86e68f] font-baloo grid grid-cols-1">
    
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 border-b-2 w-[80%] lg:w-[85%] text-center mx-auto border-orange-500">

          <div className="contact-me container lg:px-40 flex pb-10 lg:pb-0 flex-col lg:gap-y-3">
            <h1 className="font-bold text-4xl">Rayhan | Union</h1>
            <h3 className="font-medium text-xl">Contact Me</h3>
            <span className="font-">rayhancoding1603@gmail.com</span>
          </div>

          <div className="short-navlink flex-col">
            <h1 className="pb-5 font-bold text-4xl">Quick Link</h1>
            <div className="link-short flex flex-col gap-y-3">
              {Links.map((link) => (
                <Link key={link.name} href={link.href}>{link.name}</Link>
              ))}
            </div>
          </div>

      </div>

      <div className="socmed text-xl  py-10 mx-auto"> 

      <div className="font items-center text-center my-20">
          <Link href={'https://github.com/Ryhann'}>
            <a href="https://github.com/Ryhann" className='hover:text-red-600'>
              <FontAwesomeIcon icon={faGithub} style={{ width: '80px', height: "40px" }} />
              </a>
          </Link>
          <Link href={'https://www.instagram.com/raehaneiffel_/'}>
            <a href="https://www.instagram.com/raehaneiffel_/" className='hover:text-red-600'>
            <FontAwesomeIcon icon={faInstagram} style={{ width: '80px', height: "40px" }} />
            </a>
          </Link>
          <Link href={'https://twitter.com/Rayhan26901596'}>
            <a href="https://twitter.com/Rayhan26901596" className='hover:text-red-600'>
            <FontAwesomeIcon icon={faTwitter} style={{ width: '80px', height: "40px" }} />
            </a>
          </Link>
        </div>
      <h1>Made With ❤ With Rayhan Rizki Putra</h1>      
      </div>
    </div>
  )
}
