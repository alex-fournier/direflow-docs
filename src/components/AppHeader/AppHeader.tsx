import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  title?: string;
}

const AppHeader: FC<IProps> = (props) => {
  const title = props.title || 'Direflow';
  const description = 'Use the best of two worlds. Create fast, performant, native Web Components using React.';

  return (
    <Helmet>
      <meta charSet='utf-8' />

      <meta property='og:type' content='”website”' />
      <meta property='og:site_name' content={title} />
      <meta property='og:url' content='https://direflow.io/' />
      <meta
        property='og:image'
        content='https://silind-s3.s3.eu-west-2.amazonaws.com/direflow/og-image.png'
      />
      <meta property='og:description' content={description} />

      <script src='./crypto-widgets.js' />
      <script src='./ui-library.js' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@silindsoftware' />
      <meta name='twitter:creator' content='@silindsoftware' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content='https://silind-s3.s3.eu-west-2.amazonaws.com/direflow/og-image.png'
      />

      <title>{title}</title>
    </Helmet>
  );
};

export default AppHeader;
