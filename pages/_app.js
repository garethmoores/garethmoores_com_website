import '../styles/globals.css';
import config from '../src/aws-exports';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Amplify.configure({
  ...config, ssr: true
})

export default MyApp
