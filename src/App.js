import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Account from "./routes/Account";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

  useEffect(() => {
   axios.get(url).then((response) => {
       setCoins(response.data);
      // console.log(response.data);
    });
  }, [url]);
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home coins={coins}/>} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
