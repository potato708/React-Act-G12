import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Make sure these paths match your folder structure exactly
import Activity2 from "./pages/Activity2"; 
import Activity3 from "./pages/Activity3"; 
import Activity4 from "./pages/Activity4"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Change this path to Activity4 to run it as the home page */}
        <Route path="/" element={<Activity4 />} />
        
        {/* These activities can still be visited via the URL bar */}
        <Route path="/activity2" element={<Activity2 />} />
        <Route path="/activity3" element={<Activity3 />} />
        <Route path="/activity4" element={<Activity4 />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;