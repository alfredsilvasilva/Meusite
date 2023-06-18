import { requestToBodyStream } from "next/dist/server/body-streams";
import Head from 'next/head'
import { Component } from "react";
import Content from "../components/Content";
import Menu from "../components/Menu";
import Footer from "../components/Footer"
import MainContainer from "../components/Maincontainer";


function Home (){
    
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" contents="index, folow" />
          <meta name="description" content="Meusite" />

          <title>MeuSite</title>
          
        </Head>
  
        
      
       
        
 
      </div>
    );
   
}
export default Home;