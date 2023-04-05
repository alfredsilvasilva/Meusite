import { requestToBodyStream } from "next/dist/server/body-streams";
import Head from 'next/head'
import { Component } from "react";

import Menu from "../components/Menu";
import Footer from "../components/Footer"


function Home (){
    
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" contents="index, folow" />
          <meta name="description" content="Meusite" />

          <title>My page title</title>
          
        </Head>
       
        
      
       
        
 
      </div>
    );
   
}
export default Home;