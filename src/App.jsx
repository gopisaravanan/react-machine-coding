import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Weather } from "./routes/route";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <h2>Machine Coding</h2>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
