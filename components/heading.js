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
      <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&amp;display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:700&amp;display=swap" rel="stylesheet" />
    </Head>
  );
}
