import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'බෞද්ධයන් සඳහාම වෙන් වූ ශ්‍රී ලංකාවේ ප්‍රථම හා ඔබේ විස්වාසනීයතම මංගල සේවාව',
  author = 'boduviwaha.lk',
  meta = [],
  title = 'යහපත් පවුලක්, යහපත් සමාජයක් - boduviwaha.lk',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}
