import { requestToBodyStream } from "next/dist/server/body-streams";
import Head from 'next/head'
import Menu from '../components/Menu'
function Home (){
    
    return (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="robots" contents="index, folow"/>
            <meta name="description" content="Meusite" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

          <title>About</title>
        </Head>
        <Menu/>
            
        
      </div>
      
      )
}
export default Home;