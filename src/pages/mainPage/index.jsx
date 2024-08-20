import Hero from "../hero";
import About from "../about";
import CardsPage from "../cardspage";
import CharityCards from "../../components/charityCards";
import Footer from "../../components/footer";
import ContactPage from "../../pages/contactpage/index.jsx";
function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <CardsPage />
      <CharityCards />
      <ContactPage />
      <Footer />
    </>
  );
}

export default MainPage;
