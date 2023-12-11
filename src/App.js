import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headeer/Header";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import NavBar from "./components/navbar/NavBar";
import Magazin from "./components/magazin/Magazin";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <News />
        <NavBar />
      </div>
      <div className="magazin_wrapper">
        <Magazin />
        <Magazin />
        <Magazin />
      </div>
      <Footer />
    </div>
  );
}

export default App;
