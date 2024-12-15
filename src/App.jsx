import { createContext, useState } from "react";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

// react-router-dom imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const ShowDropdown = createContext(false);

function App() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Router>
        <ShowDropdown.Provider value={{ showDropDown, setShowDropDown, isModalOpen, setIsModalOpen }}>
          <Header />
          <main id="main-content" className="mx-10">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </ShowDropdown.Provider>
      </Router>
    </>
  );
}

export default App;
