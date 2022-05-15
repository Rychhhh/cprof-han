import Link from "next/link";
import Popup from 'reactjs-popup';

export default function Navbar() {
  return (
    <div className="w-[55%] py-10 flex gap-2 mx-auto justify-between ">
        <div className="flex" data-aos="fade-right" data-aos-duration="2000">
            <h1 className="text-[30px] mt-[35px] mb:text-[40px]">Union</h1>
        </div>
        <div className="hidden ml-[260px] text-[25px] gap-16 mt-[45px] md:flex" data-aos="fade-left" data-aos-duration="2000">
            <div className="border-none duration-500 text-slate-500 hover:text-slate-900 hover:border-b-4 hover:h-9 hover:border-slate-900 hover:border-solid"><Link href='/'>About</Link></div>
            <div className="border-none duration-500 text-slate-500 hover:text-slate-900 hover:border-b-4 hover:h-9 hover:border-slate-900 hover:border-solid"><Link href='/project'>Project</Link></div>
            <div className="border-none duration-500 text-slate-500 hover:text-slate-900 hover:border-b-4 hover:h-9 hover:border-slate-900 hover:border-solid">
              <Popup trigger={<button>Blog</button>} position="bottom center">
                  <h1 className="bg-blue-400 py-2 px-4 font-bold font-poppins">Coming Soon...</h1>
              </Popup>
              </div>
        </div>
    </div>
  )
}
