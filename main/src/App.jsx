import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Activity3 />} /> 
        <Route path="/activity2" element={<Activity2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;