import '../styles/style.css'
import MainContainer from '../components/Maincontainer'

function MyApp({ Component, pageProps }) {
    
  return (
  <MainContainer>
    <Component {...pageProps} />
  </MainContainer>)
  }
  export default MyApp;