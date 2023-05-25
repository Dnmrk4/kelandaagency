import Head from "next/head";


const IndexPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}Kelanda international</title>
        <meta property="og:title" content="KELANDA INTERNATIONAL AGENCY . Your success is our success . 📍 Daima Tower, Northern Tower, 9th floor, Eldoret, Kenya" key="title" />
      </Head>
    </div>
  );
};

export default IndexPage;
