import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
