import Menu from "./Menu";
import Footer from "./Footer";
import Home from "../pages";
import Content from "./Content";

export default function MainContainer ({childrem}){
    return(
        <>
         <div>{childrem}</div>
         <Menu/>
        <Home/>
        <Content/>
        <Footer/>
        </>
    )
}