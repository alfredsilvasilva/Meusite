import Menu from "./Menu";
import Footer from "./Footer";
import Home from "../pages";


export default function MainContainer ({childrem}){
    return(
        <>
         <div>{childrem}</div>
         <Menu/>
        <Home/>
   
        <Footer/>
        </>
    )
}