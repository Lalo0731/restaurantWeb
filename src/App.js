import React from "react";
import { Routes, Route } from 'react-router';

import firebase, { FirebaseContext } from "./firebase";

import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevaPlatillo from "./components/paginas/NuevaPlatillo";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <div className="md:flex min-h-screen">
        <Sidebar/>

        <div className="md:w-3/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/nuevo-platillo" element={<NuevaPlatillo/>}/>
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
