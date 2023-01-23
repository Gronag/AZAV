import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages to jump to
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

// need to install : npm install react-router-dom
function App() {
  const [username, setUsername] = useState("David Comp")
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        {/* this is where the routes shall be in the code - Router */}
        <Router>
          {/* adding our component Navbar fixed on top */}
          <Navbar />
          {/* here now the different pages incl. path to jump to and change screen below Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            {/* having a error page when no path found */}
            <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
