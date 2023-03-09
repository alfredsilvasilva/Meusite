import '../styles/style.css'
import MainContainer from '../components/maincontainer'

function MyApp({ Component, pageProps }) {
    
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>)
  }
  export default MyApp;