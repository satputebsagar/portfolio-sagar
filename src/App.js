import { useEffect, useState } from "react";
import {Contact,About,Home,Services,Projects} from "./pages/index"
import LoadingScreen from "./components/LoadingScreen";
import {ThemeProvider} from "./themeProvider";
import {Navbar} from "./components"
function App(){
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>setloading(false),1000)
  },[])

  return(
  <ThemeProvider>
    <>
    {!loading ? (
      <div>
        <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div> ):( <LoadingScreen/>)}
    </>
  </ThemeProvider>


  )
}
export default App;