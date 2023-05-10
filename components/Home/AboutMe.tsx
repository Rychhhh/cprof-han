import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" bg-[url('/img/grass2.png')] overflow-hidden bg-bottom bg-cover bg-no-repeat h-[1400px] md:h-[1190px] font-baloo">
        <div className="pohon1 -ml-48 absolute overflow-hidden">
            <img src="/img/tree1.png" alt="tree1" width={478} height={1029}/>
            <img src="/img/rayhann.jpg" alt="tree1" width={478} height={1029}/>

        </div>
        <div className="pohon2 right-0 absolute overflow-x-hidden hidden md:block">
            <img src="/img/tree2.png" alt="tree2" width={468} height={1029}/>
        </div>
    
        <div className="container grid grid-cols-1 w-[75%] py-52 md:grid-cols-2 ">

        {/* Profile Image  */}
            <div className="w-[250px] ml-3 mt-10 absolute top-[500px] md:right-20 md:top-20 md:w-[400px] md:mt-[400px]" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                <div className="rounded-full w-[362px] h-[350px] md:w-[402px] object-center md:h-[402px] bg-[url('/img/rayhann.jpg')] md:bg-[url('/img/rushia.jpg')] hover-image-profile"></div>

          </div>

            {/* Card About Me */}
            <div className="card shadow-xl relative bg-gradient-to-r from-card to-[#2cac56] mx-auto w-[260px] h-[300px] p-[10px] ml-10 rounded-[20px] md:w-[369px] md:rounded-[45px] md:h-[489px]  md:p-[28px]" data-aos="flip-left" data-aos-duration="1500">

                <div className="rect aboutme absolute z-100 grid grid-cols-1 gap-12 top-10 items-center -right-[50px] md:-right-40 md:top-32">
                    <span className="bg-[#35c264] text-white w-auto text-sm font-bold py-3 px-3 text-left rounded-xl md:py-3 md:px-5 md:text-xl"> <span className="pr-5">🎍</span>  
                    F u l l s t a c k <br />  D e v e l o p e r</span>
                    <span className="bg-[#35c264] text-white w-auto text-sm font-bold py-3 px-3 text-left rounded-xl md:py-3 md:px-5 md:text-xl"> <span className="pr-5">🎮</span>  
                     G a m e r s <br /> E n t h u s i a s t</span>
                    <span className="bg-[#35c264] text-white w-auto text-sm font-bold py-3 px-3 text-left rounded-xl md:py-3 md:px-5 md:text-xl"> <span className="pr-5">🎑</span>  
                     U I  U X <br /> D e v e l o p e r</span>
                </div>
                <h1 className="text-[20px] font-bold w-64 h-12 text-white pr-10 ">A Brief Introduction</h1>
                <h3 className="w-[200px] text-[35px] h-[100px] font-bold text-white pt-5  md:w-[247px] md:h-[159px] md:text-[80px]">About Me</h3>
                <div className="card-side absolute -left-9 -bottom-8" >
                    <img src="/img/card-side-bg.png" alt="cardbgside" width={200} height={200} />
                </div>
            </div>

            {/*  */}
            <div className="my_experience mt-40 md:ml-80 md:mt-10">
                <h1 className="w-[443px] h-[93px] text-[25px] ml-10 font-normal mb-[10px] md:mb-[89px] md:text-[45px]" data-aos="flip-left" data-aos-duration="2500">I LEARN THOUGHT EXPERIENCE</h1>
                <p className="w-96 h-56 mx-[10px] text-[16px] font-normal" data-aos="fade-up" data-aos-duration="2500">Hi! im Rayhan from Indonesia, im now a student and also doing a little bit of busy learning about the world of programming. I can make several websites and also my hobby is a gamer and otaku
                <br /> <br />
                There is one thing that I think. Success will not come instantly but from our own efforts
                </p>
                <div className="button w-60 h-10 ml-20 md:w-80 md:h-16 bg-gradient-to-r bg-[#93E89B] drop-shadow-[0_5px_0px_rgba(0,0,0,0.30)] to-[#2cac56] hover:drop-shadow-none hover:translate-y-2  text-white duration-150 hover:bg-[#6ae977] flex justify-center items-center rounded-[40px]"  data-aos="fade-up" data-aos-duration="2500">
                    <a href="/cv_download/CVRayhan.pdf" target="_blank"
                    rel="noopener noreferrer">
                        <span className="font-normal text-sm md:text-xl ">Sounds Good. Tell Me More !</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
