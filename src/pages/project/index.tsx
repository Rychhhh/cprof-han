import * as React from "react"
import Image from "next/image";
import getAllProject from '../../../lib/data';
import { ProjectMetaData } from "../../../types/MetaData";
import Layout from "../../../components/project/Layout";
import { useRouter } from "next/router";

export default function Index({posts}: any) {

  const router = useRouter();
  
  return (
    <Layout pageTitle="Project" className="bg-project selection:bg-orange-300 font-whyte font-bold h-[3000px] relative scroll-smooth">

      <div className="w-[95%] mx-auto text-xl mt-20 grid grid-cols-1 md:w-[55%] md:grid-cols-1 gap-10 md:gap-32 lg:grid-cols-2 lg:gap-22 lg:w-[80%] xl:gap-20 xl:w-[60%] ">
          {posts.map((post: ProjectMetaData, index: React.Key) => {
            return(
                  <div key={index} onClick={() => router.push(`project/${post.permalink}`) } className="card w-[370px] md:w-[540px] lg:w-[500px] h-auto p-3 border-2 border-solid border-black font-poppins duration-200 rounded-xl hover:-translate-y-5 active:scale-90">
                    <div className="w-300 h-32 ">
                      
                      <div className="img-tags relative">
                          <Image className="rounded-xl w-[200px] h-[300px] md:w-[532px] md:h-[300px] " src={`${post.thumb}`} alt={post.title} width={532} height={300}/>
                          <ul className="tags absolute bottom-0 left-0 font-normal text-white flex gap-5 mb-5 ml-3 ">
                            {post.tags.map((tag:{}) => (
                                <li key={index} className="bg-slate-400 py-1 px-1 text-[10px] rounded-md w-16 h-9 text-center md:w-24 md:text-sm">{tag}</li>
                            ))}
                              
                          </ul>
                      </div>
                    </div>
                  
                  <div className="w-[100%] mt-[100px] md:mt-[185px] h-26 p-2 border-2 border-solid border-black ">

                    <h1 className="text-xl text-center py-2">{post.title}</h1>

                    <div className="border-2 border-black border-solid bg-slate-300 p-10">
                        {post.subtitle}
                    </div>

                  </div>
                </div>
            )
          })}
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  const allProject = getAllProject()
  const posts: any = allProject.map( ({data, content, permalink}) => ({
    ...data,
    content,
    permalink
  }))

  return {
    props: {
      posts: posts.sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
    }
  }
}