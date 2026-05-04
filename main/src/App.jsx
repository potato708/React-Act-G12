import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity2 from "./pages/Activity2"; // Ensure the path matches your folder
import Activity4 from "./pages/Activity4"; // Ensure the path matches your folder

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* This path="/" is what the browser is looking for */}
        <Route path="/" element={<Activity4 />} /> 
        <Route path="/activity2" element={<Activity2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;