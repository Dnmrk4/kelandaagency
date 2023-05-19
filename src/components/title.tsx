import Head from "next/head";


const IndexPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}|Danmark Mutai</title>
        <meta property="og:title" content="KELANDA INTERNATIONAL AGENCY, kelanda international agency, kelanda, KIA, study abroad eldoret, study abroad" key="title" />
      </Head>
    </div>
  );
};

export default IndexPage;
