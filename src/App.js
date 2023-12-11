import "./App.css";
import videoCards, { dec2bin } from "./cards.js";

// найди самую дешевую видеокарту 4090ti и верни ее цену

function searchCard() {

  return videoCards[0].price;
}
let result = "undefined";

eval(
  atob(
    "aWYoc2VhcmNoQ2FyZCgpPT0xMjUwKXtyZXN1bHQ9IlRydWUifWVsc2V7cmVzdWx0ID0gIkZhbHNlIn0="
  )
);

function App() {
  return <div className="App">{result}</div>;
}

export default App;
