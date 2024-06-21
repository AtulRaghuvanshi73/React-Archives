import { useState } from "react";
import Header from "../components/Header";
import TabButton from "../components/TabButton";
// import componentsImg from "../src/assets/components.png"
import CoreConcepts from "../components/CoreConcepts";
import Examples from "../components/Examples";



function App() {
  return (
      <>
          <Header /> 
        <main>
          <CoreConcepts />
          <Examples/>
        </main>
      </>
  );
} 

export default App;
