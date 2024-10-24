
import Layout from "./Layout/Layout";
import Aos from "aos";
import { useEffect } from "react";


function App() {
  useEffect(() => {
   Aos.init({
    duration: 1000, //! Durée de l'animation en millisecondes
    once: true,
  });
  }, [])
  
  return (
    <>
     <Layout/>
    </>
  );
}

export default App;
