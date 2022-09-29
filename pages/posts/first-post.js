import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";


export default function FirstPost(){
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>

   

        <h1>First Post</h1>
        <p>
          Psikee! Go <Link href="/">back Home</Link>
        </p>
      </Layout>
    );
} 
