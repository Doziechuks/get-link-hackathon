import { Suspense, lazy } from "react";
import "./App.less";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";

const Home = lazy(() => import("./pages/home/Home"));
const Register = lazy(() => import("./pages/register/Register"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route caseSensitive path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
