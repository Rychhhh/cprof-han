import Link from "next/link";
import Popup from 'reactjs-popup';

export default function Navbar() {

  let Links = [
    { class: 'link', name: 'Home', href: '/'},
    { class: 'link', name: 'Project', href: '/project'},
    { class: 'link', name: 'Certificate', href: '/certificate'},
    { class: 'link', name: 'Feedback', href: '/feedback'},
  ]

  return (
    <div className="w-[55%] py-10 flex gap-2 mx-auto justify-between ">
        <div className="flex" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="text-[30px] mt-[35px] mb:text-[40px]">Union</h1>
        </div>
        <div className="hidden ml-[260px] text-[25px] gap-16 mt-[45px] md:flex" data-aos="fade-left" data-aos-duration="2000">

            {Links.map((link) => (
              <div key={link.name} className="border-none duration-500 text-slate-500 hover:text-slate-900 hover:border-b-4 hover:h-9 hover:border-slate-900 hover:border-solid"><Link href={link.href}>{link.name}</Link></div>
            ))}
            <div className="border-none duration-500 text-slate-500 hover:text-slate-900 hover:border-b-4 hover:h-9 hover:border-slate-900 hover:border-solid">
              <Popup trigger={<button>Blog</button>} position="bottom center">
                  <h1 className="bg-blue-400 py-2 px-4 font-bold font-poppins">Coming Soon...</h1>
              </Popup>
              </div>
        </div>


        <button className="group mx-2 flex flex-col rounded pt-9 pl-24 space-y-2 hover:bg-slate-400  md:hidden">
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <div className="absolute z-50 top-0 right-full h-screen w-8/12 bg-slate-800 text-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col space-y-10 items-center w-full text-base cursor-pointer pt-10 h-full">
                  {Links.map((link) => (
                      <div key={link.name} className='link-active'>
                            <Link href={link.href} key={link.class}>{link.name}</Link>
                      </div>
                    ))}
                        <Popup trigger={<div className='cursor-pointer'> Blog</div>} position="bottom center">
                                <h1 className='p-4 cursor-wait bg-white'>Coming Soon</h1>
                      </Popup>
                
              </ul>
            </div>
        </button>
    </div>
  )
}