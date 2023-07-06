import Head from "next/head";

export default function Heading({ title, favicon }) {
  return (
    <Head>
      <link rel="icon" href={favicon ? favicon : "/favicon.ico"} />
      <meta name="description" content="" />
      <meta name="og:title" content="LinkedIn:Clone" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title}</title>
    </Head>
  );
}
