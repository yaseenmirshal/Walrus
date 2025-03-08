import Image from "next/image";
import Landing from "./Components/Landing";
import  Warning  from "./Components/Warning";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";




export default function Home() {
  return (
   <>

   {/* <Landing/> */}
   <Warning/>

   <Navbar/>
   <Landing/>
   <Footer/>
   {/* <Warning/> */}


 
   </>
  );
}
