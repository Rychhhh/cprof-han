import getAllProject from "../../../lib/data";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { PostMetaData } from '../../../types/MetaData';
import Layout from "../../../components/project/Layout";
import Image from "next/image";
import Head from "next/head";
import React from "react";

export default function DetailProject({ tags, title, subtitle, timestamp, thumb, mdxSource }: PostMetaData) {
  console.log({ tags, title, subtitle, timestamp, thumb , mdxSource })
  return (
    <Layout pageTitle={`Detail ${title}`} className="bg-project selection:bg-orange-300 font-whyte font-bold relative scroll-smooth">
      <div className="container mx-auto w-[83%] mt-20 md:w-[33%]">
          <Image src={thumb} alt={'Photo Detail'} className="rounded-xl" width={750} height={500} />
      </div>
      <div className="content w-[75%] mx-auto py-7 md:w-[50%]">
          <h3 className="text-xl font-bold font-poppins">Diposting pada {timestamp}</h3>
          <h3 className="text-6xl w-[100%] font-bold font-baloo pt-3">{title}</h3>
          <h3 className="text-2xl w-[100%] font-poppins font-thin pt-3">{subtitle}</h3>
          <ul className="tags bottom-0 left-0 font-normal text-white flex gap-5 mb-5 ml-3 my-5">
          {tags.map((tag: {}, index: React.Key) => (
              <li key={index} className="bg-slate-400 pt-2 px-1 text-[10px] rounded-md w-16 h-9 text-center md:w-24 md:text-sm">{tag}</li>
          ))}
          </ul>
          <hr className="border-[1px] border-slate-700"/>

          <div className="gap-32 space-y-10 pt-10 text-xl hover:underline underline-offset-2">
            <MDXRemote {...mdxSource}/>
          </div>
      </div>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const allPost = getAllProject();
  console.log(allPost);
  const { data, content }: any = allPost.find((item) => item.permalink === params?.slug);
  const prism = require("mdx-prism");
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [prism],
    },
  });
  return {
    props: {
      ...data,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllProject().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};