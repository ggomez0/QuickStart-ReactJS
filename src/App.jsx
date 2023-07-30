import React, { useState } from "react";
import { MyRoutes } from "./routes/routes";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <NavBar></NavBar>
      
      <MyRoutes></MyRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
