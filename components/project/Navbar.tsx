import Link from "next/link";
import Popup from 'reactjs-popup';

export default function Navbar() {

  let Links = [
    { class: 'link', name: 'About', href: '/'},
    { class: 'link', name: 'Project', href: '/project'},
  ]

  return (
    <div className="mx-auto p-10 flex justify-between md:p-24" id="#top">
      <div className="logo" data-aos="fade-right" data-aos-duration="1500">
        <h1 className="text-xl uppercase md:text-4xl">Union</h1>
      </div>
      
      <div className="hidden md:flex lg:space-x-52" data-aos="fade-left" data-aos-duration="1500"> 
          <div className="link ml-5 pt-1 space-x-2  md:space-x-10 lg:space-x-16 md:text-xl">
            <span className="underline-offset-4 hover:underline duration-75">
              <Link href={'/'}> About </Link>
            </span>
            <span className="underline-offset-4 hover:underline duration-75">
              <Link href={'/project'}> Project </Link> 
            </span>
            <span className="underline-offset-4 hover:underline duration-75">
              <Popup trigger={<button className="font-bold underline-offset-4 hover:underline">Blog</button>} position="bottom center">
                <div className="py-2 px-4 bg-orange-200 font-semibold font-whytee">
                  <h1>Segera Dibuat</h1>
                </div>
              </Popup>
            </span>
           
          </div>

          <div className="darkmode">
            <div className="hidden py-3 px-6 ml-4 bg-orange-200 items-center md:block md:px-5 md:py-2">
              Dark Mode
            </div>
          </div>
      </div>

      {/* <div className="block md:hidden">
        ----
      </div> */}

        <button className="group mx-2 flex flex-col rounded py-3 px-4 space-y-2 hover:bg-slate-400  md:hidden">
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
