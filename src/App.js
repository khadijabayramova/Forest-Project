import "./App.css";

import Header from "./components/header";
import Hero from "./pages/hero";
import About from "./pages/about/index.jsx";
import CardsPage from "./pages/cardspage/index.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/index.jsx";
import CharityCards from "./components/charityCards/index.jsx";
import Footer from "./components/footer/index.jsx";
import ContactPage from "./pages/contactpage/index.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Home" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cards" element={<CardsPage />} />
        <Route path="/CharityCards" element={<CharityCards />} />
        <Route path="/Contact" element={< ContactPage/>} />
        <Route path="/Info" element={<Footer />} />
        
      </Routes>
    </div>
  );
}

export default App;
