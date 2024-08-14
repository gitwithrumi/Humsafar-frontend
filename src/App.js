import "./App.css";
import Button from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ServiceSearch from "./components/ServiceSearch";
import TopCategories from "./components/TopCategories";
import TopSellers from "./components/TopSellers";

function App() {
  return (
    <>
      <Header />
      <Button ButtonText="Sign up" />
      <TopCategories />
      <TopSellers />
      <Features />
      <ServiceSearch />
      <Footer />
    </>
  );
}

export default App;
