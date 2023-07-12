import Head from "next/head";

export default function Heading({ title, favicon }) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={favicon ? favicon : "/favicon.ico"} />
      <meta name="description" content="" />
      <meta name="og:title" content="LinkedIn:Clone" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
  );
}
