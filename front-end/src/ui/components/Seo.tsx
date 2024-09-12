import Head from "next/head";

interface Props {
    title: string;
    description: string;
}

export const Seo = ({ title, description}: Props) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>

  );
};
