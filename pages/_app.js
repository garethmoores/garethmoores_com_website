import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/garethmoores.css';
import config from '../src/aws-exports';
import { Amplify } from "aws-amplify";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Amplify.configure({
  ...config, ssr: true
});

export default MyApp
