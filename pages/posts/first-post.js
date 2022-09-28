import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


export default function FirstPost(){
    return (
      <div className="post-container">
        <Head>
          <title>First Post</title>
        </Head>

   

        <h1>First Post</h1>
        <p>
          Psikee! Go <Link href="/">back Home</Link>
        </p>
      </div>
    );
} 
