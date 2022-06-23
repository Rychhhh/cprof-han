import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/project/Layout";


export default function Certificate() {


    let DataImage = [
        {alt: 'Certificate Command', src: '/certificate/Rayhan_Command.png'},
        {alt: 'Certificate HTML', src: '/certificate/Rayhan_HTML.png'},
        {alt: 'Certificate Javascript', src: '/certificate/Rayhan_Javascript.png'},
        {alt: 'Certificate Node.js', src: '/certificate/Rayhan_Node.js.png'},
        {alt: 'Certificate Scss', src: '/certificate/Rayhan_Scss.png'},
        {alt: 'Certificate SQL', src: '/certificate/Rayhan_SQL.png'},
        {alt: 'Certificate Pingfest', src: '/certificate/Sertifikat_Pingfest.png'},
    ]

    const [modal, setModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    const getImage = (src) => {
        setImgSrc(src);
        setModal(true);
    }

    return(
        <>

                <div className={modal ? "modal_open modal" : "modal"}>
                        <img src={imgSrc}/>
                        <button onClick={() => setModal(false)} className="btn-close">X</button>
                </div>
            <Layout pageTitle="Certificate" className="bg-slate-300 relative" childrenHeader="Certificate">
                <div className="w-[75%] md:w-[45%] grid gap-10 grid-cols-1 md:grid-cols-2 mt-20 mx-auto">

                    {DataImage.map((image) => (
                        <div key={image.alt} className="image-certificate" onClick={() => getImage(image.src)}>
                            <img  src={image.src} alt={image.alt} width={423} height={423}/>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

