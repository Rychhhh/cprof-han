import * as React from "react"
import getAllProject from '../../../lib/data';
import { ProjectMetaData } from "../../../types/MetaData";
import Layout from "../../../components/project/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index({posts}: any) {

  const router = useRouter();
  
  return (
    <Layout pageTitle="Project" className="bg-project selection:bg-orange-300 font-whyte font-bold h-[3000px] relative scroll-smooth" childrenHeader="project">
        
      <div className="project-collection">
          {posts.map((post: ProjectMetaData, index: React.Key) => {
            return(
                  <div key={index} onClick={() => router.push(`project/${post.permalink}`) } className="card w-[370px] md:w-[540px] lg:w-[500px] h-auto p-3 border-2 border-solid border-black font-poppins duration-200 rounded-xl hover:-translate-y-5 active:scale-90">
                    <div className="w-300 h-32 ">
                      
                      <div className="img-tags relative">
                          <img className="rounded-xl w-[500px] h-[200px] md:w-[532px] md:h-[300px] " src={`${post.thumb}`} alt={post.title} width={532} height={300}/>
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

      <div className="text-center my-20 font-sans text-2xl   ">

        <div className="link-github ">
          <Link href="https://github.com/Ryhann">Github</Link>
        </div>

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