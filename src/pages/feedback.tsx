import Giscus from '@giscus/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Blog() {
    const router = useRouter();


    return (
        <div className="blog">
                <Head>
                    <title>Feedback | Rayhan</title>
                </Head>

                {/* Navbar */}
                <div className="flex text-white p-10">
                    <span className="back-button" onClick={() => router.push('/')}>Back To Home</span>
                </div>

            <div className="stack-1">
                <h1 className="title">Criticism and Suggestions</h1>
                <Giscus
                    repo="Ryhann/cprof-han"
                    repoId="R_kgDOHGg_XQ"
                    category="Announcements"
                    categoryId="DIC_kwDOHGg_Xc4CP_Vz"
                    mapping="pathname"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    loading="lazy"
                    theme="dark"
                    />
            </div>
               
        </div>
    )
}