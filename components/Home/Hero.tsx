import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="overflow-hidden font-baloo relative z-100 h-[760px] bg-[url('/img/grass.png')] bg-bottom bg-cover bg-no-repeat bg-fixed " > 
        <Navbar />   

        <div className="w-full overflow-x-hidden">
          <div className={`animate_cloud absolute inset-y-0 my-[100px]`}>
              <Image src="/img/awan1.png" alt="awan1" width={600} height={200}/>
            </div>
            <div className={`animate_cloud1 absolute inset-y-0 my-52 `}>
              <Image src="/img/awan2.png" alt="awan2" width={600} height={200}/>
            </div>
        </div>
          
        <div className="container md:flex md:w-full md:overflow-visible">
         
          <div className="greating container mx-auto w-[55%] md:w-[45%] py-20 relative">
              <div className="welcome text-[15px] font-bold" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500">
                Hi! Welcome , Im
              </div>
              <h1 className="text-[50px] w-[275px] mt-2"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                  Rayhan Rizki Putra
              </h1>
              <h4 className="w-[242px] h-[30px] text-[13px]" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                  I’m a fullstack developer and game enthusiast from <span className="bg-gradient-to-r from-red-700 to-gray-200 bg-clip-text text-transparent">indonesia</span>
              </h4>
          </div>  

        </div> 
        
    </div>
  )
}
