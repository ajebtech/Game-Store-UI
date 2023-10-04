import React from "react";
import Collector from "./Components/Collector";
import "./App.css";
import Account from "./Components/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./Components/Payment";
import MyOrders from "./Components/MyOrders";
import Header from "./Components/Header";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Collector />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/login" element={<Account />} />
          <Route path="/orders" element={<MyOrders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
