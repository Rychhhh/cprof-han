import Link from "next/link";
import Popup from 'reactjs-popup';

export default function Navbar() {
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

      <div className="block md:hidden">
        ----
      </div>
    </div>
  )
}
